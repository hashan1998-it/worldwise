# WorldWise Design System (Tesla-inspired, WorldWise Green)

> Adapted from the Tesla DESIGN.md in [awesome-design-md](https://github.com/VoltAgent/awesome-design-md).
> Same "radical subtraction" philosophy, but the single accent colour is **WorldWise Green** instead of Tesla's Electric Blue, and the content is travel photography and a world map instead of cars.
> Tokens live in `src/theme.js` (Chakra UI v3 `createSystem`). Use token names, not raw hex, in components.

## 1. Visual Theme & Atmosphere

WorldWise is an exercise in radical subtraction: the photography and the map are the product, and the interface is almost nothing. The home page opens with a full-viewport hero that fills the screen edge-to-edge with cinematic travel photography (mountains, lakes, cities) under a flat dark scrim, with a short headline floating in white type. There are no decorative borders, no gradients, no patterns and no shadows. The UI exists only to provide just enough navigation to get out of the way.

The colour philosophy is almost ascetic: a single green (`#00C46A`) for primary calls to action, three shades of dark grey for text hierarchy, and white or Carbon Dark for everything else. The emotional weight is carried by photography on marketing pages and by the map inside the app. The navigation bar floats over the hero with no visible background, border or shadow — the spaced WORLDWISE wordmark and a few labels simply sit in the space.

Typography uses the system UI stack (`-apple-system`, `Segoe UI`, Arial) as a stand-in for Tesla's proprietary Universal Sans. Hero titles render at 40px weight 500; navigation, buttons and body copy sit at 14–16px with weights 400–500. No text shadows, no gradients, no decorative type.

**Key Characteristics:**
- Full-viewport hero sections (`100dvh`) dominated by travel photography with minimal overlay UI
- Near-zero UI decoration: no shadows, no gradients, no borders, no patterns
- Single accent colour — **WorldWise Green** (`#00C46A`) — used only for primary CTA buttons
- System UI font stack for headings and body (fast, no web-font download)
- Photography-first marketing pages; map-first app pages
- Transparent navigation floating over the hero; mobile menu is a flat white panel that overlays the hero
- `0.33s` colour-only transitions for every interactive state change

## 2. Color Palette & Roles

### Primary
- **WorldWise Green** (`#00C46A`) — token `brand.500`: primary CTA background. The only chromatic colour in the interface. Used for "Start tracking now" and other primary actions
- **Green Hover** (`#00A85B`) — token `brand.600`: primary CTA hover/pressed state
- **Green Light** (`#1AD67E`) — token `brand.400`: reserved for focus rings and map markers; never for large surfaces
- **Pure White** (`#FFFFFF`): light surfaces, mobile menu panel, secondary button fill

### CTA Text Rule
- Text on green buttons is **Carbon Dark** (`#171A20`), never white. White on `#00C46A` is only ~2.3:1 contrast and fails WCAG AA; Carbon Dark on green is ~9:1

### Surface & Background
- **Carbon Dark** (`#171A20`) — token `carbon`: hero scrim base, dark app surfaces, sidebar
- **Hero Scrim** (`rgba(23, 26, 32, 0.7)`): flat (non-gradient) overlay on hero photography so white text stays readable
- **Light Ash** (`#F4F4F4`) — token `ash`: alternate light surface and hover fill on light panels
- **White Canvas** (`#FFFFFF`): light page backgrounds and panels

### Neutrals & Text
- **Carbon Dark** (`#171A20`) — token `carbon`: headings and nav text on light surfaces; CTA label text
- **Graphite** (`#393C41`) — token `graphite`: body text on light surfaces
- **Pewter** (`#5C5E62`) — token `pewter`: tertiary text, sub-links
- **Silver Fog** (`#8E8E8E`) — token `silverFog`: placeholders, disabled states
- **White** (`#FFFFFF`): headings and nav text on dark/hero surfaces
- **White 80%** (`whiteAlpha.800`): body text on dark/hero surfaces
- **Cloud Gray** (`#EEEEEE`) / **Pale Silver** (`#D0D1D2`): dividers where spacing alone is not enough

### Semantic
- No decorative semantic colours on marketing pages. Inside the app, use standard Chakra `red` / `orange` palettes only for form errors and warnings
- Green is the only interactive colour signal — do not use green for success messages that compete with the CTA

### Gradient System
- No gradients are used anywhere in the interface, including the hero overlay (use a flat `_before` scrim, not `linear-gradient`)
- Depth comes from photography, whitespace and the contrast between full-bleed imagery and flat surfaces

## 3. Typography Rules

### Font Family
- **Heading & Body**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif` (tokens `fonts.heading`, `fonts.body`)
- No OpenType features, no italics on marketing pages

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Title | 40px desktop / 28px mobile | 500 | 1.2 | normal | White on hero scrim |
| Hero Subtitle | 16px | 400 | 1.5 | normal | `whiteAlpha.800` on hero |
| Wordmark | 18px | 500 | 1.2 | 0.3em | **Uppercase — the only uppercase text** |
| Nav Item | 14px | 500 | 1.2 | normal | White on hero, Carbon on light panel |
| Body Text | 14–16px | 400 | 1.43–1.5 | normal | Graphite on light surfaces |
| Button Label | 14px | 500 | 1.2 | normal | Carbon Dark on green |
| Sub-link | 14px | 400 | 1.43 | normal | Pewter |

### Principles
- **Normal letter-spacing everywhere** except the wordmark
- **Weight restraint**: only 400 and 500. No bold (700), no light (300)
- **Unified sizing**: most UI text at 14px; only hero titles break away
- **No text transforms**: no uppercase on nav items or CTAs (wordmark is the single exception)

## 4. Component Stylings

### Buttons
All interactive controls use barely-rounded rectangles — token `rounded="control"` (4px).

**Primary CTA**:
- bg `brand.500` (`#00C46A`), text `carbon` (`#171A20`), 14px / 500, radius 4px, height 40px, width 200px
- Hover: `brand.600` (`#00A85B`)
- Transition: `background-color {durations.tesla}` (0.33s)
- Used for: "Start tracking now" and the single main action per screen

**Secondary CTA**:
- bg `#FFFFFF`, text `graphite`, same size and radius as primary
- Used alongside a primary CTA only — never more than two buttons per screen

**Nav Item**:
- bg transparent, 14px / 500, radius 4px, padding 4px 16px, min height 32px
- On hero: white text, hover/current page `whiteAlpha.200`
- On light panel: Carbon text, hover/current page `ash`
- Active page is shown with a subtle background fill, **not** a colour change
- Transition: `background-color, color {durations.tesla}`

**Icon Button (mobile menu toggle)**:
- Ghost variant, white icon, radius 4px
- Override ghost defaults: `_hover`/`_expanded` `whiteAlpha.200`, `_active` `whiteAlpha.300` — the default light-grey fill hides the white icon
- Always set `aria-label` and `aria-expanded`

**Text Link**:
- Pewter, 14px / 400, no background; underline on hover

### Cards & Containers
**Photo Card** (e.g. city / country tiles):
- Full-bleed photography, radius token `card` (12px), overflow hidden
- White label top-left, no shadow, no border, no gradient

**App Sidebar** (cities / countries list):
- bg `carbon`, white headings, `whiteAlpha.800` body, items separated by spacing, not borders

### Inputs & Forms
- Transparent or white background, Carbon text, Silver Fog placeholder
- 14px, radius 4px, minimal border (`#D0D1D2`); focus ring `brand.400`

### Navigation
- **Desktop**: spaced uppercase WORLDWISE wordmark left, nav items right, transparent over hero
- **Mobile (<768px)**: hamburger toggle; opens a flat white panel, absolutely positioned under the bar so it **overlays** the hero instead of pushing content down. Panel closes on link click
- No visible separator between nav and hero
- Login is a nav item, not a green button — the hero CTA is the screen's only primary action

### Image Treatment
- **Hero**: `100dvh`, edge-to-edge, no padding or margin, flat Carbon scrim at 70%
- Serve responsive WebP: `hero-960.webp` (<768px) and `hero-1920.webp` (≥768px), preloaded in `index.html` with `fetchpriority="high"`
- Below-the-fold images lazy-load

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px (Chakra spacing scale: `2` = 8px, `4` = 16px)
- Nav padding: 16px mobile, 40px desktop
- Card gap: ~16px

### Grid & Container
- Hero and photo sections: full-bleed, edge-to-edge
- Text content max width: `2xl` (~672px) centred
- App: sidebar + full-height map split

### Whitespace Philosophy
One message per screen. Each full-viewport section carries one headline, one short paragraph and at most two buttons. Whitespace (or photography) is the frame, not empty space to fill.

### Border Radius Scale
| Value | Token | Context |
|-------|-------|---------|
| 0px | — | Default for most elements |
| 4px | `control` | Buttons, nav items, inputs, mobile menu panel |
| 12px | `card` | Large photo cards |
| 50% | `full` | Dot indicators, map markers |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | No shadow, no border | Default for everything |
| 1 (Scrim) | `rgba(23, 26, 32, 0.7)` | Hero photo overlay |
| 2 (Panel) | Solid white, no shadow | Mobile menu overlaying the hero (stacking via `zIndex`) |
| 3 (Modal) | `rgba(128,128,128,0.65)` | Modal overlays |

Depth is communicated with z-index layering, opacity and photography — never box-shadows.

## 7. Do's and Don'ts

### Do
- Let photography (marketing) and the map (app) dominate every screen
- Use WorldWise Green (`brand.500`) only for primary CTAs
- Put Carbon Dark text on green buttons
- Keep typography at weight 400–500
- Use 4px radius (`control`) for all interactive elements
- Keep all transitions at 0.33s and colour-only
- Use theme tokens (`brand.500`, `carbon`, `rounded="control"`) instead of raw hex values
- Overlay the mobile menu on top of content

### Don't
- Add shadows to any element
- Use a second chromatic accent (no blue, purple, or extra brand colours)
- Use gradients — including `linear-gradient` tricks for overlays
- Put white text on green buttons (fails contrast)
- Use text larger than 40px on the web
- Use uppercase on nav items or buttons (wordmark only)
- Use pill buttons or large radii on controls
- Add scale/translate hover animations
- Show more than two CTAs on one screen
- Let the mobile menu push page content down

## 8. Responsive Behavior

### Breakpoints (Chakra defaults)
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (`base`) | <768px | Hamburger nav with overlay panel, hero title 28px, `hero-960.webp`, CTAs stack vertically |
| Tablet / Desktop (`md`+) | ≥768px | Horizontal nav, hero title 40px, `hero-1920.webp`, CTAs side by side |

### Touch Targets
- Primary CTA: 200 × 40px
- Nav items: min 32px height, 16px horizontal padding
- Menu toggle: 40px square

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "WorldWise Green (#00C46A, token brand.500)", hover "#00A85B (brand.600)"
- CTA text: "Carbon Dark (#171A20, token carbon)"
- Dark surface / hero scrim: "Carbon Dark (#171A20) at 70%"
- Light surface: "Pure White (#FFFFFF)", alternate "Light Ash (#F4F4F4, token ash)"
- Body text (light): "Graphite (#393C41)"; tertiary: "Pewter (#5C5E62)"
- Body text (dark): "white at 80% (whiteAlpha.800)"

### Example Component Prompts
- "Create a hero section with a full-viewport travel photo, a flat Carbon Dark scrim at 70% (no gradient), a centred white 40px weight-500 headline, a 16px whiteAlpha.800 subtitle, and one WorldWise Green (#00C46A) 'Start tracking now' button, 200×40px, 4px radius, Carbon Dark label"
- "Design a transparent nav bar over the hero: spaced uppercase WORLDWISE wordmark on the left, 14px weight-500 white nav items on the right with a subtle whiteAlpha.200 background on hover and on the current page; on mobile, a hamburger that opens a flat white overlay panel with Carbon Dark items"
- "Build a Carbon Dark app sidebar listing visited cities: white 17px weight-500 city names, Pewter-style secondary text at whiteAlpha.800, items separated by spacing only, no borders or shadows"
- "Create a city photo card with full-bleed photography, 12px radius, overflow hidden, white label in the top-left corner, no shadow or gradient"

### Iteration Guide
1. Change ONE component at a time
2. Reference token names (`brand.500`, `carbon`, `control`) rather than hex values in code
3. If a screen has more than one green element, remove all but the primary CTA
4. Always check that photography or the map is doing the emotional work — if the UI itself feels "designed", it's too much
