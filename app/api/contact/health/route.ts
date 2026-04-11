import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isPlaceholderValue(value: string | undefined) {
  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return (
    normalized.includes("example.com") ||
    normalized.includes("your_smtp_") ||
    normalized.includes("changeme") ||
    normalized.includes("replace_with_")
  );
}

export async function GET() {
  const nodeEnv = process.env.NODE_ENV || "development";
  const isProduction = nodeEnv === "production";

  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  const issues: string[] = [];
  const warnings: string[] = [];

  if (!host) {
    issues.push("Missing SMTP_HOST.");
  }
  if (!portRaw) {
    issues.push("Missing SMTP_PORT.");
  }
  if (!user) {
    issues.push("Missing SMTP_USER.");
  }
  if (!pass) {
    issues.push("Missing SMTP_PASS.");
  }

  const port = Number(portRaw);
  if (portRaw && (!Number.isInteger(port) || port <= 0)) {
    issues.push("SMTP_PORT must be a valid positive integer.");
  }

  if (isPlaceholderValue(host)) {
    issues.push("SMTP_HOST appears to be a placeholder value.");
  }
  if (isPlaceholderValue(user)) {
    issues.push("SMTP_USER appears to be a placeholder value.");
  }
  if (isPlaceholderValue(pass)) {
    issues.push("SMTP_PASS appears to be a placeholder value.");
  }

  if (!isProduction && issues.length > 0) {
    warnings.push(
      "Development mode can fall back to Ethereal test transport when SMTP is invalid.",
    );
  }

  const readyForProduction = issues.length === 0;

  return NextResponse.json(
    {
      ok: true,
      environment: nodeEnv,
      readyForProduction,
      smtp: {
        hostConfigured: Boolean(host),
        portConfigured: Boolean(portRaw),
        userConfigured: Boolean(user),
        passConfigured: Boolean(pass),
      },
      contact: {
        toEmail:
          process.env.CONTACT_TO_EMAIL?.trim() ||
          process.env.EMAIL_ADDRESS?.trim() ||
          "(fallback from site config)",
        fromEmailConfigured: Boolean(process.env.CONTACT_FROM_EMAIL?.trim()),
      },
      issues,
      warnings,
    },
    { status: isProduction && !readyForProduction ? 500 : 200 },
  );
}
