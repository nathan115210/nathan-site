"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const trimmedName = formState.name.trim();
  const trimmedEmail = formState.email.trim();
  const trimmedMessage = formState.message.trim();

  const emailError = !trimmedEmail
    ? "Email is required."
    : !EMAIL_REGEX.test(trimmedEmail)
      ? "Please enter a valid email address."
      : null;

  const messageError = !trimmedMessage
    ? "Message is required."
    : trimmedMessage.length < 10
      ? "Message should be at least 10 characters."
      : null;

  const nameError = !trimmedName ? "Name is required." : null;

  const isFormInvalid = useMemo(
    () => Boolean(nameError || emailError || messageError),
    [nameError, emailError, messageError],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (isFormInvalid) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        setFeedback({
          type: "error",
          text: body.error || "Could not send your message. Please try again.",
        });
        return;
      }

      setFormState(INITIAL_STATE);
      setHasSubmitted(false);
      setTouched({ name: false, email: false, message: false });
      setFeedback({
        type: "success",
        text: "Message sent. I will get back to you soon.",
      });
    } catch {
      setFeedback({
        type: "error",
        text: "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
          Name
        </span>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(event) =>
            setFormState((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          onBlur={() => setTouched((current) => ({ ...current, name: true }))}
          required
          maxLength={120}
          aria-invalid={Boolean(nameError && (hasSubmitted || touched.name))}
          aria-describedby={
            nameError && (hasSubmitted || touched.name)
              ? "contact-name-error"
              : undefined
          }
          className="w-full rounded-lg border border-text-primary/15 bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
          placeholder="Your name"
          autoComplete="name"
        />
        {nameError && (hasSubmitted || touched.name) ? (
          <span
            id="contact-name-error"
            className="mt-2 block text-sm text-red-600"
          >
            {nameError}
          </span>
        ) : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
          Email
        </span>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(event) =>
            setFormState((current) => ({
              ...current,
              email: event.target.value,
            }))
          }
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          required
          aria-invalid={Boolean(emailError && (hasSubmitted || touched.email))}
          aria-describedby={
            emailError && (hasSubmitted || touched.email)
              ? "contact-email-error"
              : undefined
          }
          className="w-full rounded-lg border border-text-primary/15 bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
          placeholder="you@example.com"
          autoComplete="email"
        />
        {emailError && (hasSubmitted || touched.email) ? (
          <span
            id="contact-email-error"
            className="mt-2 block text-sm text-red-600"
          >
            {emailError}
          </span>
        ) : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          onBlur={() =>
            setTouched((current) => ({ ...current, message: true }))
          }
          required
          minLength={10}
          maxLength={5000}
          aria-invalid={Boolean(
            messageError && (hasSubmitted || touched.message),
          )}
          aria-describedby={
            messageError && (hasSubmitted || touched.message)
              ? "contact-message-error"
              : undefined
          }
          className="w-full rounded-lg border border-text-primary/15 bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
          placeholder="A few lines on the team, the product, and what kind of help you need."
        />
        {messageError && (hasSubmitted || touched.message) ? (
          <span
            id="contact-message-error"
            className="mt-2 block text-sm text-red-600"
          >
            {messageError}
          </span>
        ) : null}
      </label>
      {feedback ? (
        <p
          role="status"
          aria-live="polite"
          className={
            feedback.type === "success"
              ? "text-sm text-green-700"
              : "text-sm text-red-600"
          }
        >
          {feedback.text}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full border border-accent-primary/35 bg-accent-primary px-5 py-3 text-sm font-medium tracking-[0.02em] text-bg-primary transition duration-420 ease-editorial enabled:hover:-translate-y-0.5 enabled:hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
