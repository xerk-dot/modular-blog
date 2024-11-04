const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orangered: '#ff4500',
      },
      fontFamily: {
        'jetbrains-mono': ['"JetBrains Mono"', 'monospace', 'sans-serif'],
        'jetbrains-bold': ['"JetBrains Mono Bold"', 'monospace', 'sans-serif'],
      },
    },  },
  plugins: [
    plugin(function ({ addVariant }) {
      // this class is applied to `html` by `app/theme-efect.ts`, similar
      // to how `dark:` gets enabled
      addVariant("theme-system", ".theme-system &");
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
