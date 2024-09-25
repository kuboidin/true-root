/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-light)",
        foreground: "var(--light-dark)",
        primary: "var(--primary)",
        primaryHover: "var(--primary-hover)",
        primaryDark: "var(--primary-dark)",
        secondary: "var(--secondary)",
        secondaryHover: "var(--secondary-hover)",
        secondaryDark: "var(--secondary-dark)",
      },
    },
  },
  plugins: [],
};
