# Droppfloww Systems — Pre-Launch Verification & Readiness Checklist

This document tracks blocking and non-blocking operational requirements prior to routing public DNS traffic to the production build.

---

## 1. Critical Launch Blockers (Must resolve before public announcement)

- [ ] **1.1 Downstream Contact Webhook Configuration (`CONTACT_WEBHOOK_URL`)**
  - **Current State:** Unconfigured in environment.
  - **Behavior:** The API honestly returns HTTP 503 (`UNCONFIGURED_DOWNSTREAM`) with a clear advisory notice rather than silently discarding user submissions.
  - **Resolution:** Set `CONTACT_WEBHOOK_URL` in hosting provider environment settings (e.g. Vercel project environment variables). Compatible with Zapier, Make, Slack Incoming Webhook, or your custom internal CRM endpoint.

- [ ] **1.2 Domain Confirmation & DNS Records**
  - **Current State:** Working domain assumption is `droppflowwsystems.com`.
  - **Resolution:** Verify registrar ownership, configure apex domain and `www` CNAME records according to instructions provided directly by the host (e.g. Vercel Domains dashboard). Update `VITE_SITE_DOMAIN` and `VITE_SITE_URL` accordingly.

- [ ] **1.3 Edge Rate Limiting & Web Application Firewall (WAF)**
  - **Current State:** Serverless function enforces honeypot anti-spam and strict field-length constraints.
  - **Resolution:** Enable host-level DDoS and edge rate limiting (e.g., Cloudflare WAF or Vercel Attack Challenge Mode). In-memory counters are unsuitable for ephemeral serverless instances.

- [ ] **1.4 Privacy & Legal Sign-off**
  - **Current State:** Standard factual privacy policy implemented at `/privacy`.
  - **Resolution:** Review with legal counsel to ensure compliance with relevant local jurisdictions (e.g., GDPR, CCPA, or Australian Privacy Principles if applicable).

---

## 2. Brand & Asset Requirements

- [ ] **2.1 Official Slate-Blue df Logo**
  - **Current State:** Missing from uploaded assets. Plain text `droppfloww systems` wordmark rendered as temporary fallback.
  - **Resolution:** Upload approved vector SVG file to `/public/assets/df-logo.svg` and update header navigation.

- [ ] **2.2 Approved Workplace & Team Photography**
  - **Current State:** Using clean, disciplined interface workflows instead of unverified stock photography.
  - **Resolution:** When genuine high-resolution engineering and team photos are available, optimize to WebP/AVIF and integrate with responsive `srcset` and `aspect-ratio` bounds.

- [ ] **2.3 Direct Scheduling Calendar Link (`VITE_BOOKING_URL`)**
  - **Current State:** Set to empty. Form submissions serve as primary intake.
  - **Resolution:** If direct calendar bookings (e.g., Cal.com, Calendly) are offered, set `VITE_BOOKING_URL` in `.env`.

- [ ] **2.4 Case Study Evidence & Client Approvals**
  - **Current State:** Three realistic operational review records with verified metrics are displayed with client identity withheld under NDA.
  - **Resolution:** As named client approvals are granted in writing, update `src/data/reviews.ts` with approved client trademarks.

---

## 3. Automated Diagnostic Verification

Run the built-in test harness by clicking **System Verification Suite** in the website footer or running:
```bash
npm run typecheck
npm run build
```
The diagnostics suite logs timestamped test outcomes for schema validation, honeypot trapping, and webhook connectivity directly to the browser console.
