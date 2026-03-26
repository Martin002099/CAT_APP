# CAT APP — Purrfect Match

A complete mobile app design system and screen implementations built with the **Vignelli System** UI Kit.

## Structure

```
CAT_APP/
├── ui-kit/
│   └── storybook.html        # Vignelli System component storybook (open in browser)
├── app/
│   ├── catapp_screens.tsx    # All 5 screens · React Native + StyleSheet
│   ├── CatApp.tsx            # All 5 screens · React + inline styles
│   └── HomeScreen.tsx        # Home screen · React + Tailwind · full spec notes
└── docs/
    └── dev_handoff.md        # Design tokens, component map, screen specs
```

## Screens

| Screen | Node ID | Description |
|--------|---------|-------------|
| 01 — Home | `6:1525` | Cat listings, search, filter chips |
| 02 — Cat Profile | `6:1612` | Cat detail, stats, adoption CTA |
| 03 — Search & Filter | `6:1676` | Focused search, filter panel, results |
| 04 — Adopt Form | `6:1764` | Multi-step adoption form |
| 05 — Success | `6:1837` | Application submitted confirmation |

## Design System

Built on the **Vignelli System** — a Massimo Vignelli-inspired design system with:
- **71 design tokens** (colors, typography, spacing, motion)
- **7 component sets** (Button, Badge, Input, Alert, Navigation, Avatar, Card)
- **12-column grid** · 24px gutters · 48px margins

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#E8450A` | Primary brand orange |
| `ink` | `#141410` | Primary text |
| `background` | `#F5F5F0` | Page background |
| `surface` | `#FFFFFF` | Cards, panels |
| `success` | `#1A7A3C` | Success states |
| `error` | `#CC1A00` | Error states |

### Typography
- **Font**: Helvetica Neue (primary), Courier New (mono)
- **Scale**: 10 / 12 / 16 / 20 / 28 / 40 / 56 / 80px
- **Weights**: 400 / 500 / 700 / 900

## Figma Files

- **UI Kit**: [Claude to Figma](https://www.figma.com/design/ZlxAy3fHcV7aTgJdN4nfbh/Claude-to-Figma)
- **App**: [CAT APP](https://www.figma.com/design/qbgK9fZyaOwpAplriR80Ez/CAT-APP)

## UI Kit Storybook

Open `ui-kit/storybook.html` in any browser — no build step required.

Includes live rendered variants for all 7 components with:
- All type × state combinations
- Props tables
- Usage code snippets
- Direct Figma node links
- Token reference pages (Colors, Typography, Spacing)
