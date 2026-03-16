import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isDevelopmentEnvironment() {
  return process.env.NODE_ENV !== "production";
}

function isPlaceholderSmtpValue(value: string | undefined) {
  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return (
    normalized.includes("example.com") ||
    normalized.includes("your_smtp_") ||
    normalized.includes("changeme")
  );
}

function shouldFallbackToTestTransport(error: unknown) {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: string }).code)
      : "";

  return ["ENOTFOUND", "ECONNREFUSED", "ETIMEDOUT", "EAUTH"].includes(code);
}

function normalize(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validatePayload(payload: ContactPayload) {
  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const message = normalize(payload.message);

  if (!name || !email || !message) {
    return { error: "Please complete all required fields." };
  }

  if (name.length > 120) {
    return { error: "Name is too long." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (message.length < 10 || message.length > 5000) {
    return {
      error: "Message should be between 10 and 5000 characters.",
    };
  }

  return { name, email, message };
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !portRaw || !user || !pass) {
    return {
      error:
        "SMTP is not configured on the server. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    };
  }

  const port = Number(portRaw);

  if (!Number.isInteger(port) || port <= 0) {
    return { error: "SMTP_PORT is invalid." };
  }

  return {
    host,
    port,
    auth: { user, pass },
    secure: port === 465,
  };
}

async function createTransporter(options?: { forceTestTransport?: boolean }) {
  if (options?.forceTestTransport && isDevelopmentEnvironment()) {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      `Portfolio Contact <${testAccount.user}>`;

    return {
      transporter,
      from,
      isTestTransport: true,
    };
  }

  const smtpConfig = getSmtpConfig();
  if (
    !("error" in smtpConfig) &&
    !(
      isDevelopmentEnvironment() &&
      (isPlaceholderSmtpValue(smtpConfig.host) ||
        isPlaceholderSmtpValue(smtpConfig.auth.user) ||
        isPlaceholderSmtpValue(smtpConfig.auth.pass))
    )
  ) {
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      `Portfolio Contact <${smtpConfig.auth.user}>`;

    return {
      transporter: nodemailer.createTransport(smtpConfig),
      from,
      isTestTransport: false,
    };
  }

  if (isDevelopmentEnvironment()) {
    return createTransporter({ forceTestTransport: true });
  }

  throw new Error(smtpConfig.error);
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;
    const validated = validatePayload(payload);

    if ("error" in validated) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;
    let { transporter, from, isTestTransport } = await createTransporter();
    const safeName = escapeHtml(validated.name);
    const safeEmail = escapeHtml(validated.email);
    const safeMessage = escapeHtml(validated.message).replace(/\n/g, "<br/>");

    let info;
    try {
      info = await transporter.sendMail({
        to,
        from,
        replyTo: validated.email,
        subject: `Portfolio contact: ${validated.name}`,
        text: [
          `Name: ${validated.name}`,
          `Email: ${validated.email}`,
          "",
          "Message:",
          validated.message,
        ].join("\n"),
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      });
    } catch (error) {
      if (
        !isDevelopmentEnvironment() ||
        !shouldFallbackToTestTransport(error)
      ) {
        throw error;
      }

      console.warn(
        "Primary SMTP transport failed in development; retrying with Ethereal.",
        error,
      );

      const fallbackTransport = await createTransporter({
        forceTestTransport: true,
      });
      transporter = fallbackTransport.transporter;
      from = fallbackTransport.from;
      isTestTransport = fallbackTransport.isTestTransport;

      info = await transporter.sendMail({
        to,
        from,
        replyTo: validated.email,
        subject: `Portfolio contact: ${validated.name}`,
        text: [
          `Name: ${validated.name}`,
          `Email: ${validated.email}`,
          "",
          "Message:",
          validated.message,
        ].join("\n"),
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      });
    }

    if (isTestTransport) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      return NextResponse.json({ ok: true, previewUrl });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);

    if (isDevelopmentEnvironment()) {
      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "Unable to send your message right now. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
