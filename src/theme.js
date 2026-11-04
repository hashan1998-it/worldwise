import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Design tokens based on DESIGN.md (Tesla-inspired), keeping WorldWise green
// as the single accent colour instead of Tesla's Electric Blue.
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Single accent – used only for primary CTAs
        brand: {
          400: { value: "#1ad67e" },
          500: { value: "#00c46a" },
          600: { value: "#00a85b" },
        },
        carbon: { value: "#171A20" }, // headings, dark surfaces
        graphite: { value: "#393C41" }, // body text
        pewter: { value: "#5C5E62" }, // tertiary text
        silverFog: { value: "#8E8E8E" }, // placeholders, disabled
        ash: { value: "#F4F4F4" }, // alternate light surface
      },
      // "Twemoji Country Flags" only covers flag emojis (unicode-range),
      // so it fixes flags on Windows without changing any other text.
      fonts: {
        heading: {
          value:
            '"Twemoji Country Flags", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        },
        body: {
          value:
            '"Twemoji Country Flags", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        },
      },
      radii: {
        control: { value: "4px" }, // buttons, nav items
        card: { value: "12px" }, // large photo cards
      },
      durations: {
        tesla: { value: "0.33s" }, // universal transition timing
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
