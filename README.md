This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email (Outlook / Microsoft 365)

The `/api/contact` route sends enquiries over SMTP. Set these in `.env` (and in your
hosting provider's environment settings):

| Variable | Purpose | Default |
| --- | --- | --- |
| `SMTP_USER` | Mailbox used to authenticate and send from | — (required) |
| `SMTP_PASSWORD` | Mailbox password or app password | — (required) |
| `SMTP_HOST` | SMTP server | `smtp.office365.com` |
| `SMTP_PORT` | SMTP port (STARTTLS) | `587` |
| `CONTACT_ADMIN_EMAIL` | Inbox that receives enquiries | `info@realityshipping.com` |

Notes for Microsoft 365:

- **SMTP AUTH must be enabled** for the mailbox (Microsoft 365 admin center → Users →
  the mailbox → Mail → Manage email apps → Authenticated SMTP), and tenant-wide in
  Exchange admin center if the org default is off.
- If MFA is enforced on the mailbox, use an **app password** rather than the account
  password.
- The `From` header is forced to `SMTP_USER`; Microsoft 365 rejects mail sent from an
  address the authenticated mailbox has no Send As rights to.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
