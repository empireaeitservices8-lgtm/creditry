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
          900: "#002D22", // Dark Green
          800: "#003F2D", // Primary Forest Green
          700: "#075B42", // Secondary Green
          600: "#0D6E51",
          500: "#138563",
          100: "#E3ECE8",
          50: "#F0F5F2",
        },
        gold: {
          900: "#8F5E00",
          800: "#B87900", // Dark Gold
          700: "#C88A00", // Base Gold
          600: "#D9A62A", // Light Gold
          500: "#E5B83E",
          400: "#F2C14E", // Highlight Gold
          300: "#F8D67F",
          100: "#FCF3D9",
          50: "#FEFBF0",
        },
        ivory: {
          DEFAULT: "#FBF7F0", // Warm Ivory
          light: "#FFFDF9",   // Light Background
          dark: "#F4EDE0",
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
        serif: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #C88A00 0%, #F2C14E 50%, #B87900 100%)",
        "forest-gradient": "linear-gradient(180deg, #003F2D 0%, #002D22 100%)",
      },
      boxShadow: {
        "gold-subtle": "0 4px 20px -2px rgba(200, 138, 0, 0.15)",
        "gold-hover": "0 10px 30px -4px rgba(200, 138, 0, 0.25)",
        "card-luxury": "0 12px 36px -8px rgba(0, 45, 34, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(0, 45, 34, 0.14)",
      }
    },
  },
  plugins: [],
};
