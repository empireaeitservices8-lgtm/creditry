/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#03231B",
          900: "#043327",
          850: "#053B2D",
          800: "#064333", // Primary Deep Green for Headings & Primary Buttons
          700: "#0B5341",
          600: "#106A53",
          500: "#178367",
          100: "#E2ECE7",
          50: "#F0F5F2",
          DEFAULT: "#064333",
        },
        gold: {
          900: "#8B6A1A",
          800: "#AA821E",
          700: "#C89B2C", // Premium Gold Accent
          600: "#D6AB3B",
          500: "#E2BC55",
          400: "#ECCF76",
          300: "#F5DF9E",
          100: "#FAF2DB",
          50: "#FCF8EC",
          DEFAULT: "#C89B2C",
        },
        cream: {
          DEFAULT: "#FAF7F0", // Warm cream main background
          50: "#FFFFFF",
          100: "#FAF7F0",
          200: "#F5EFE3",
        },
        beige: {
          DEFAULT: "#E9E1D0", // Subtle warm beige borders and dividers
          border: "#E9E1D0",
          divider: "#E9E1D0",
          50: "#F7F3EB",
          100: "#EFE8DA",
          200: "#E9E1D0",
          300: "#DDD2BD",
        },
        ivory: {
          DEFAULT: "#FAF7F0", // Warm Cream
          light: "#FAF7F0",   // Warm Cream
          dark: "#F4ECE0",
        },
        charcoal: {
          900: "#17201C", // Dark Text
          800: "#24322C",
          700: "#384A42",
          600: "#50655B",
          500: "#70847B",
          400: "#98A8A0",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        sans: ["var(--font-sans)", "'Plus Jakarta Sans'", "var(--font-manrope)", "'Manrope'", "Inter", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #C89B2C 0%, #ECCF76 50%, #AA821E 100%)",
        "forest-gradient": "linear-gradient(180deg, #064333 0%, #043327 100%)",
      },
      boxShadow: {
        "gold-subtle": "0 4px 20px -2px rgba(200, 155, 44, 0.15)",
        "gold-hover": "0 10px 30px -4px rgba(200, 155, 44, 0.25)",
        "card-luxury": "0 10px 30px -8px rgba(6, 67, 51, 0.05), 0 2px 8px -2px rgba(6, 67, 51, 0.03)",
        "card-hover": "0 18px 36px -10px rgba(6, 67, 51, 0.10), 0 4px 12px -2px rgba(6, 67, 51, 0.05)",
      }
    },
  },
  plugins: [],
};
