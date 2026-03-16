This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

Required for contact email sending:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Optional:

- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `CONTACT_RATE_LIMIT_MAX` (default `5` requests per minute per IP)

In development, if SMTP variables are missing, the contact API uses an Ethereal test mailbox automatically instead of failing with 500.

For production, use real SMTP credentials and do not use placeholder values such as `smtp.example.com` or `your_smtp_username`.

### Outlook / Hotmail setup

If you use an Outlook/Hotmail inbox, use:

- `SMTP_HOST=smtp-mail.outlook.com`
- `SMTP_PORT=587`
- `SMTP_USER=<your_outlook_email>`
- `SMTP_PASS=<your_outlook_app_password_or_mail_password>`

`CONTACT_FROM_EMAIL` should generally match the authenticated mailbox/domain to avoid provider rejection.

### Contact health endpoint

You can verify contact-email readiness at:

- `/api/contact/health`

It returns configuration status without exposing secrets.
In production, this endpoint returns HTTP `500` when SMTP configuration is invalid.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
