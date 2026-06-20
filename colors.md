---
name: Finance Professional
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bacac5'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#859490'
  outline-variant: '#3c4a46'
  surface-tint: '#3cddc7'
  primary: '#57f1db'
  on-primary: '#003731'
  primary-container: '#2dd4bf'
  on-primary-container: '#00574d'
  inverse-primary: '#006b5f'
  secondary: '#ffb2b9'
  on-secondary: '#67001f'
  secondary-container: '#891933'
  on-secondary-container: '#ff97a3'
  tertiary: '#ffd47b'
  on-tertiary: '#402d00'
  tertiary-container: '#efb515'
  on-tertiary-container: '#634900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#62fae3'
  primary-fixed-dim: '#3cddc7'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#ffdadc'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#400010'
  on-secondary-fixed-variant: '#891933'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeric-data:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
  section-padding: 40px
---

## Brand & Style

The design system is built on the principles of **Precision, Transparency, and Stoicism**. As a tool for double-entry accounting, the UI prioritizes data integrity and clarity over decorative elements. The brand personality is professional and sophisticated, catering to users who view personal finance as a discipline rather than a chore.

The visual style is a blend of **Minimalism and Corporate Modern**. It utilizes a "Dark Mode First" philosophy to reduce eye strain during long periods of data entry and analysis. Layouts are strictly organized, reflecting the "offline-first" reliability of the product. The emotional response should be one of calm control—transforming the complexity of high-frequency transactions into a structured, legible narrative of financial growth.

## Colors

The palette is anchored by a deep navy background (`#0A0E17`), providing a high-contrast foundation for functional accents.

- **Primary (Teal):** Used exclusively for "Inflow" indicators, growth charts, and investment-related success states.
- **Secondary (Coral):** Reserved for "Outflow," liabilities, and critical expense alerts.
- **Tertiary (Gold):** Applied to milestones, goals, and premium achievements.
- **Neutrals:** A range of cool-toned grays are used to create hierarchy between the background and elevated surface cards.

Color should be used sparingly and purposefully to signify financial direction (positive vs. negative) rather than for decoration.

## Typography

This design system utilizes **Inter** for all roles due to its exceptional legibility in data-heavy environments.

For financial values and the **BDT (৳)** symbol, the `numeric-data` style must always use **tabular figures** (`tnum`) to ensure decimal points and currency symbols align vertically in lists and ledgers. Headlines are kept tight with slight negative letter spacing to feel modern and authoritative. Labels use uppercase styling with increased tracking to differentiate them from interactive body text.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. We use an 8px rhythmic spacing system to ensure consistency.

- **Desktop:** Side-navigation is fixed (240px), with the main content area expanding fluidly. Cards are grouped into functional "clusters" (e.g., Net Worth Overview, Recent Transactions).
- **Mobile:** Margins are reduced to 16px. Cards stack vertically.
- **Density:** High-density lists are used for the ledger, utilizing 4px (stack-sm) vertical padding between rows to maximize information density without sacrificing touch targets.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy drop shadows.

1. **Level 0 (Background):** The base layer (`#0A0E17`).
2. **Level 1 (Card/Surface):** Elevated surfaces use a slightly lighter fill (`#161B26`) and a 1px solid border (`#2D3748`).
3. **Level 2 (Active/Hover):** Interactive elements or modals use a secondary elevation (`#1F2633`) with a subtle glow effect using the Primary Teal color at 5% opacity.

This approach creates a flat, "architectural" depth that feels grounded and stable, mirroring the logic of a ledger.

## Shapes

The shape language is **Rounded** to soften the technical nature of the financial data.

Standard components (Cards, Input Fields, Buttons) use a **0.5rem (8px)** corner radius. Larger containers or dashboard sections may use `rounded-lg` (16px) to create a distinct enclosure. Small utility elements like Tags or "Pill" indicators use a full pill shape for quick visual recognition.

## Components

### Buttons
Primary buttons use a solid Teal fill with dark navy text. Secondary buttons are "Ghost" style—1px Teal border with transparent fill. Danger actions (Reset/Delete) use the Coral accent.

### Cards
Cards are the primary container. Every card must have a 1px border (`#2D3748`). Titles within cards use the `label-md` style to act as a header for the data below.

### Inputs
Input fields are dark-filled (`#0A0E17`) with a subtle border. On focus, the border transitions to Primary Teal. Error states use Coral for the border and helper text.

### Transaction Rows (Double-Entry Ledger)
Rows should be horizontally split:
- **Left:** Description and Category (Text-Secondary).
- **Right:** Amount and Currency.
- **Visual Cue:** A 2px vertical "accent bar" on the far left of the row—Teal for credit (inflow), Coral for debit (outflow).

### Chips & Badges
Used for account types (e.g., "Cash", "Credit Card", "Investment"). These use a low-opacity background of the accent colors to ensure they don't distract from the primary data.