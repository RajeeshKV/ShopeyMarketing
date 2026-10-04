# Shopey Marketing Website — Steering

## Purpose

This is the public marketing website for Shopey. It presents Shopey as a pre-built ecommerce solution for small businesses, starting at ₹10,000 one-time.

The ecommerce storefront/demo is separate:

https://app.shopey.tech

## Visual Source of Truth

The supplied reference screenshot is authoritative for the visual language.

Match its:
- layout and section hierarchy
- spacing rhythm
- typography scale
- compact cards
- borders and radii
- restrained shadows
- black/white/neutral palette
- CTA treatment
- pricing presentation
- FAQ
- footer density
- responsive behaviour

The goal is the same design quality and style, but cleaner/polished where that does not change the intended design.

Do not turn it into a generic SaaS template.

## Stack

Use:
- React
- Vite
- TypeScript
- Tailwind CSS
- reusable components
- Lucide React or equivalent SVG icon library
- semantic accessible HTML

Do not add a large UI framework just for styling.

## Assets

Before coding, inspect the repository root and asset folders.

Identify the supplied:
- desktop web-app screenshot
- mobile web-app screenshot
- Shopey logo assets
- technology/provider logos

Do not invent filenames.

Use supplied assets directly where appropriate. Never recreate the supplied logo with text.

## Footer

Footer content must be data-driven rather than hardcoded into JSX.

Support configuration for:
- navigation links
- support links
- contact links
- social links
- legal links
- copyright

Current contact data:
- Email: hello@shopey.tech
- Phone: +919656010927
- WhatsApp: +919656010927
- Instagram: @kromic.in

Architecture must allow future backend/admin configuration without rewriting Footer UI.

## Live Demo

The View Live Demo CTA must navigate to:

https://app.shopey.tech

Do not create an internal demo route.

## Commercial Positioning

Core message:
- pre-built ecommerce shop for small businesses
- ₹10,000 one-time starting price
- no monthly platform subscription
- lifetime support
- additional/custom changes cost extra
- live demo available
- admin configurable

Do not invent fake statistics, customers or unsupported claims.

## Required Quality

Avoid:
- huge empty sections
- excessive gradients
- glassmorphism
- random blobs
- oversized typography
- excessive shadows
- emoji as UI icons
- provider cards containing only first letters
- broken mobile layouts

Animations must be subtle and purposeful.

## Responsive

Desktop and mobile are first-class.

Do not simply shrink desktop. Use the supplied mobile reference to determine stacking, navigation, spacing, typography, cards, forms and footer.

## Scope

This task is for the marketing website only.

Do not modify the ecommerce application at https://app.shopey.tech.
