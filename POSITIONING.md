# Catalyst — Positioning & Site Spec

Working document. Supersedes the current site's "eCommerce analytics consultancy" framing.

---

## 1. The shift

**From:** an analytics consultancy that also writes code.
**To:** a product studio that builds data-driven applications, with analytics depth as the differentiator.

This is not a copy refresh. The deliverable changed — from insight to shipped product — and the site should describe what actually gets handed over.

---

## 2. Value proposition

### Core statement

> Catalyst builds data-driven products for web, iOS, and Android — where the intelligence is the product, not a dashboard bolted on afterward.

### The wedge

Two kinds of shops exist, and neither covers this ground:

| | App studios | Data consultancies |
|---|---|---|
| Ship to App Store | ✅ | ❌ |
| Build the data/ML layer | ❌ | ✅ |
| Own both, no handoff | ❌ | ❌ |

Most product teams solve this by hiring two vendors and paying the integration tax — the app team ships a shell, the data team ships a pipeline, and someone spends two quarters making them agree. Catalyst is one operator across both layers, so that seam doesn't exist.

### Elevator (30s)

> Catalyst builds applications that are smart by construction. Web, iOS, Android — with forecasting, personalization, and machine learning designed into the product from the first commit, not retrofitted. One principal across the full stack, from data model to App Store submission.

### One-liner

> Data-driven products, shipped.

---

## 3. Voice

**Catalyst is the actor.** "Catalyst builds…", not "we build" (overstates headcount) and not "I build" (understates the practice). Colin appears by name in About and in case-study attribution.

Tone: direct, concrete, technically specific. No "harness the power of your data." Name the stack, name the outcome.

---

## 4. Messaging architecture

### Hero

> # Data-driven products, shipped.
>
> Catalyst builds web, iOS, and Android applications with real intelligence built in — forecasting, personalization, and machine learning designed into the product, not bolted on afterward.
>
> `[ Start a Conversation ]` `[ See the Work ]`

### Services — reordered, applications first

1. **Product Development** — Web, iOS, and Android. Next.js, React Native, Supabase. Concept to App Store, including review, release, and the unglamorous parts.
2. **Intelligent Features** — What separates a product from a CRUD app: demand forecasting, recommendations, churn and LTV models, LLM integration, real-time personalization.
3. **Data Infrastructure** — The pipes underneath. Snowflake, Microsoft Fabric, GCP, Supabase. PySpark ETL and lakehouse architecture that survives contact with growth.
4. **Analytics & Reporting** — Dashboards and decision support for the humans running the business. R/Shiny, embedded analytics, executive reporting.

*Cut from the current six: "Customer Analytics" and "Subscription & Retention" fold into #2 and #4 as capabilities rather than standalone service lines. Six cards diluted the story; four sharpens it.*

### Proof — case studies reordered

**Order matters.** The applications-first claim needs an applications-first proof point.

**1 — Consumer Startup (Stealth)** *(promoted from third to first)*
Full-stack social application, zero to App Store. React Native for iOS and Android, Next.js web platform, Supabase backend with realtime subscriptions and push notifications, AI-powered features.
→ iOS & Android live · Realtime data architecture · LLM integration

**2 — Regulated Commerce** *(was "Enterprise Healthcare")*
Led data science for a consumer prescription management platform in animal health — building the models and infrastructure behind a product veterinary clients and pet owners used directly. Customer behavior modeling, demand forecasting, and cross-functional analytics through a major platform migration.
→ Churn prediction · Legacy data alignment · Snowflake optimization

**3 — DTC Subscription Commerce**
End-to-end analytics infrastructure for a subscription DTC brand. Microsoft Fabric lakehouse, PySpark ETL, realtime Shiny dashboards for executive decision-making.
→ LTV & cohort analysis · Multi-channel attribution · Realtime dashboards

### About

> Catalyst is Colin Wilson — a Portland, Maine practice building intelligent applications.
>
> Colin has led data science teams at scale across regulated commerce, DTC subscription brands, and early-stage consumer products. The through-line is building things people use: prescription platforms, subscription analytics, social apps on the App Store.
>
> Working with Catalyst means working with the principal. No account manager, no handoff between the team that models your data and the team that ships your app — because they're the same person.

### Metadata (`app/layout.tsx`)

- **Title:** `Catalyst | Data-Driven Product Development`
- **Description:** `Catalyst builds data-driven applications for web, iOS, and Android. Machine learning, forecasting, and analytics designed into the product. Portland, Maine.`
- **Keywords:** replace the analytics-heavy set — add `react native`, `ios app development`, `android app development`, `product development`, `machine learning`, `nextjs`, `supabase`; keep `snowflake`, `microsoft fabric`, `gcp`, `portland maine`; drop `ecommerce analytics`, `data consultancy` as primaries.

---

## 5. Vertical framing

Sector experience is framed as **regulated commerce** — prescription and compliance-heavy transactional products. This describes the animal health work accurately (veterinary prescription management) while remaining open to human health, pharma, and other regulated categories.

The prior "Enterprise Healthcare" label is both inaccurate and implies HIPAA/hospital work that wasn't the engagement. Removing it is a correction, not a downgrade — "regulated commerce" is a more specific and more defensible claim.

---

## 6. Open item — the "Proven Results" numbers

The current site presents three figures as Catalyst outcomes (`app/page.tsx:186-195`):

- 25% YoY growth
- 30%+ increase in customer LTV
- 15% reduction in CAC

**These need sourcing before they carry over.** If they came from an in-house role rather than a Catalyst client engagement, presenting them under "Proven Results" on a consultancy site misattributes them. Three options:

1. **Re-source and keep** — if they're defensible as client outcomes, keep the section as-is.
2. **Re-frame** — keep the numbers, attribute them honestly ("Results from data science leadership roles prior to founding Catalyst").
3. **Replace** — swap the stat band for a capability proof point that fits applications-first: apps shipped, platforms live, time-to-App-Store.

**Recommendation:** option 2 if the numbers are real and you can name the context, option 3 if not. Do not carry them forward unexamined — a repositioned site invites scrutiny, and this is the first thing a sharp prospect would probe.

---

## 7. Implementation checklist

- [x] `app/layout.tsx` — title, description, keywords, OG, Twitter card
- [x] `app/page.tsx` — hero copy
- [x] `app/page.tsx` — services: 6 cards → 4, reordered, Product Development first
- [x] `app/page.tsx` — case studies reordered, "Enterprise Healthcare" → "Regulated Commerce"
- [x] `app/page.tsx` — About section rewritten to Catalyst-as-actor
- [x] `app/page.tsx` — Proven Results: replaced with verifiable proof strip in hero (§6 option 3; revisit if numbers get sourced)
- [x] `app/page.tsx` — all "we/our" → "Catalyst"
- [x] `app/opengraph-image.tsx` — rewritten (ink + signal identity, new tagline)
- [x] Platform Expertise grid — reordered, leads with React/Next.js and mobile; "Certified Partner" language removed pending §8
- [x] Design system: token suite in `globals.css` (+ `theme.ts` mirror), Nunito, FontAwesome 6

## 8. Still open

- **Snowflake credential** — is it a SnowPro certification (individual) or a partner agreement (company)? Grid currently says "Warehousing & optimization" to avoid the claim either way.
- **Stats from §6** — if the 25% / 30% / 15% figures can be sourced and attributed, a "results" band can return.
- **Stealth client** — permission to name it or show screenshots would strengthen the lead case study.
