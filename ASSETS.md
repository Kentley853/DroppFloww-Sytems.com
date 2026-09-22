# Droppfloww Systems — Asset Manifest & Usage Rights

This document records the provenance, licensing, and usage status of visual assets and typography used in the Droppfloww Systems website.

## 1. Official df Brand Logo
- **Status:** Unsupplied in current workspace.
- **Implementation:** Following master creative guidelines, an unadorned, elegant text-led wordmark (`droppfloww` + `systems`) is rendered in semantic HTML/CSS.
- **Action for Launch:** Once the official slate-blue `df` logo vector or bitmap asset is finalized and approved, place it in `/public/assets/df-logo.svg` and link in `src/components/Navbar.tsx`.
- **Policy:** Do not generate an artificial imitation logo.

## 2. Typography
- **Primary Typeface:** DM Sans
- **Designer:** Colophon Foundry, Jonny Pinhorn
- **License:** SIL Open Font License, Version 1.1
- **Source:** Google Fonts (`https://fonts.google.com/specimen/DM+Sans`)
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Fallback Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

## 3. Product & Interface Demonstrations
- **Hero Operational Pipeline:** Custom SVG / React vector components built strictly with inline Tailwind tokens (`#FAFBFD`, `#E7EDF5`, `#617594`, `#202B3D`, `#D8E0EA`).
- **Engineering BOQ Extractor:** Custom original UI demonstration with local synthetic fixture data.
- **Office CRM Dispatcher:** Custom original UI demonstration with synthetic activity timeline.
- **Service Scheduling Matrix:** Custom original UI demonstration with synthetic technician availability cards.
- **Policy:** No stock dashboard screenshots or copied interfaces from third-party sites are used. All panels are visibly labelled "Illustrative workflow."

## 4. Icons
- **Icon Set:** Lucide React (`lucide-react`)
- **License:** ISC License (Copyright (c) Lucide Contributors)
- **Usage:** Functional UI cues (arrows, status badges, accordions, shields). No random decorative icon clusters.
