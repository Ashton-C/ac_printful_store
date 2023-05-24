const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/memphis-mini-dark.webp')",
        "light-pattern": "url('/src/memphis-mini.webp')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
