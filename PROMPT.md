# Kiro Task — Shopey Marketing Website

## Mandatory

Before coding, use:
- `.kiro/steering/marketing-site.md`
- `.kiro/steering/design-system.md`
- `.kiro/steering/implementation-rules.md`
- `.kiro/skills/marketing-ui/SKILL.md`
- `.kiro/skills/design-reference/SKILL.md`
- `.kiro/skills/visual-qa/SKILL.md`

The supplied reference image is the visual source of truth.

## Goal

Redesign/update the current Shopey marketing website so it matches the supplied reference exactly in style, spacing, components, proportions and overall feel.

It must feel premium and commercial.

Use React + Vite + TypeScript + Tailwind.

Do not settle for a generic approximation.

## First Inspect

Before changing code:
1. inspect the full repo
2. inspect package.json
3. inspect routing
4. inspect Tailwind/Vite config
5. inspect root/public/src assets
6. identify desktop web-app screenshot
7. identify mobile web-app screenshot
8. identify supplied Shopey logo
9. identify provider logos
10. inspect current footer configuration/API

Do not invent filenames.

## Changes

### 1. Product Screenshots

The desktop and mobile web-app screenshots are in the repository root.

Use them in the marketing website where the reference shows the product.

Do not recreate these screenshots manually if the supplied images are intended to be displayed.

Preserve aspect ratio and use polished framing.

### 2. Remove Demo Navigation

Remove the `Demo` navigation item completely.

Remove its corresponding section.

Do not leave dead links or empty spacing.

### 3. Live Demo

Every `View Live Demo` CTA must navigate to:

https://app.shopey.tech

Use external navigation.

Do not create a fake internal demo route.

### 4. Technology Section

Keep the technology section's overall design.

Replace first-letter placeholders with actual recognizable provider logos/icons.

Represent the real stack where applicable:
- .NET
- React
- Vite
- Supabase
- Cloudinary
- Google Authentication
- Razorpay
- Brevo
- SMS API/provider support

Prefer existing repository assets. If unavailable, use clean recognizable SVG/brand marks.

Keep every technology card visually consistent.

### 5. Remove Customer Testimonials

Remove the entire `What Our Customers Say` section.

Remove:
- heading
- testimonial cards
- content
- associated decorative/empty spacing

Do not replace it with another testimonial section.

### 6. Footer Contact Icons

Footer must show:

Email:
hello@shopey.tech

Phone:
+919656010927

WhatsApp:
+919656010927

Instagram:
@kromic.in

Use appropriate SVG icons.

Behaviour:
- email -> mailto
- phone -> tel
- WhatsApp -> WhatsApp
- Instagram -> Instagram profile

Footer values must be data-driven.

Do not hardcode contact JSX directly into the Footer component.

The architecture must allow future backend/admin configuration without rewriting Footer UI.

### 7. Remove Footer CTA

Remove `Get Your Store` from the footer completely.

Rebalance the footer after removal.

### 8. Replace Logo

Find the supplied Shopey logo in the repository and use it.

Replace the current logo in:
- header
- footer
- other appropriate brand locations

Do not recreate the logo using text.

## Content

The website sells pre-built ecommerce shops for small businesses.

Core positioning:
- starting at ₹10,000
- one-time payment
- no monthly platform subscription
- lifetime support
- additional/custom changes cost extra
- live demo
- admin configurable
- modern technology stack

Do not invent fake testimonials, statistics or claims.

## Footer Configuration

Footer must be driven by configuration/data.

It should support:
- brand
- navigation groups
- support links
- contact links
- social links
- legal links
- copyright

Changing footer content should not require editing Footer JSX.

## Visual Standard

Match the supplied reference:
- same visual hierarchy
- same compact premium feel
- same spacing philosophy
- same typography direction
- same card treatment
- same border/radius language
- same CTA language
- same footer density

Allowed improvements:
- cleaner alignment
- better responsive behaviour
- accessibility
- subtle hover/focus states
- better icon consistency

Not allowed:
- generic SaaS redesign
- giant gradients
- glassmorphism
- random blobs
- huge hero
- excessive animations
- emoji icons
- oversized cards

## Responsive

Use the supplied mobile reference.

Do not simply shrink desktop.

Ensure:
- usable mobile nav
- correct hero stacking
- readable headings
- correct screenshot behaviour
- clean cards
- readable pricing
- usable FAQ
- usable CTA form
- stacked footer
- no horizontal overflow

## Scope

Marketing website only.

Do not modify the ecommerce app at:

https://app.shopey.tech

Only link to it.

## Final Validation

Run:
1. TypeScript validation
2. production build
3. lint if configured

Then visually inspect desktop and mobile.

Verify all 8 requested changes.

If the UI is visibly weaker than the reference, keep iterating.

## Final Report

Report:
- changed files
- new/updated components
- footer configuration location
- logo asset used
- provider icon approach
- Live Demo implementation
- build/typecheck result
- remaining issues, if any

Do not claim exact parity if obvious differences remain.
