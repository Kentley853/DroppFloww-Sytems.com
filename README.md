# Droppfloww Systems — Operational Agency Website

The production codebase for **Droppfloww Systems**, an AI consulting and custom systems agency. Built with React 19, TypeScript, Vite, and Tailwind CSS.

Positioning: *"Do more without hiring more."*

---

## 1. Project Overview & Architecture

- **Frontend:** Static, hosting-agnostic React SPA with semantic HTML, DM Sans typography, and accessible ARIA navigation.
- **Server Function:** Serverless contact proxy located at `/api/contact.ts`, compatible with Vercel Serverless Functions and local Vite middleware.
- **Integrations:** Decoupled server-side forwarding via `CONTACT_WEBHOOK_URL` (Slack, CRM, Zapier, Make). Honeypot anti-spam protection and schema validation built-in.
- **Review Transparency:** Integrated client operational feedback drawer showcasing measured outcomes under confidentiality terms.

---

## 2. Local Development Setup

### Prerequisites
- Node.js 20+
- npm 9+

### Quick Start
```bash
# 1. Install dependencies
npm ci

# 2. Start the local development server (runs on port 3000)
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Verification & Quality Scripts
```bash
# Run TypeScript typecheck
npm run typecheck

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Deployment Guide (Vercel)

### Exporting from Google AI Studio
1. Open the project settings menu in Google AI Studio Build.
2. Select **Export to GitHub** or **Download ZIP**.
3. If downloading as ZIP, extract the archive and commit to your chosen git repository.

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
2. Select your imported git repository.
3. Configure the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Under **Environment Variables**, configure the required server secrets (see Section 4).
5. Click **Deploy**.

> **Commercial Notice:** Code compatibility with Vercel or any other cloud provider does not imply hosting is free. Commercial usage is subject to the respective provider's pricing terms and bandwidth limits.

---

## 4. Environment Variables Configuration

Configure these variables in your deployment dashboard (or `.env.local` for local development):

| Variable | Scope | Description |
| :--- | :--- | :--- |
| `CONTACT_WEBHOOK_URL` | **Server-only** | HTTPS destination URL (e.g. Slack webhook, Make.com, or CRM) where validated enquiry payloads are posted. **Never expose with VITE_ prefix.** |
| `VITE_SITE_DOMAIN` | Client | Display domain name (default: `droppflowwsystems.com`). |
| `VITE_SITE_URL` | Client | Canonical URL used for Open Graph tags and sitemaps (e.g., `https://droppflowwsystems.com`). |
| `VITE_BOOKING_URL` | Client | Optional external calendar booking link (e.g., Cal.com or Calendly). |
| `VITE_CONTACT_EMAIL` | Client | Optional direct contact email displayed if configured. |

---

## 5. Domain and DNS Setup

1. In your Vercel project settings, navigate to **Settings > Domains**.
2. Add your custom domain (e.g., `droppflowwsystems.com` and `www.droppflowwsystems.com`).
3. Vercel will generate specific `A` and `CNAME` records tailored to your project.
4. Log in to your domain registrar (e.g., Cloudflare, Namecheap, Google Domains) and enter the exact DNS records provided by Vercel.
5. Wait for DNS propagation and SSL certificate issuance.

---

## 6. Testing Contact Delivery

You can test contact endpoint health and honeypot protection using the built-in diagnostic console:
1. Scroll to the footer and click **System Verification Suite**.
2. Click **Re-run test suite**.
3. Open your browser console (F12) to view timestamped JSON diagnostic logs for:
   - Input validation rejection (HTTP 422)
   - Honeypot bot rejection (HTTP 400)
   - Webhook forwarding status (HTTP 200 if configured, or HTTP 503 if unconfigured)

---

## 7. Updating Content & Adding Official Assets

- **Brand Logo:** When the official slate-blue `df` logo is available, place it in `/public/assets/df-logo.svg` and update the logo link in `src/components/Navbar.tsx`.
- **Client Reviews:** Update `src/data/reviews.ts` to add newly verified operational case reviews.
- **Workflow Fixtures:** Update `src/data/examples.ts` to adjust the interactive demonstrations for engineering, office, or service businesses.
- **Pre-Launch Tasks:** Review `LAUNCH_CHECKLIST.md` prior to public traffic routing.
