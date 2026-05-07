/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        clblue: {
          50: "#eef7ff",
          100: "#d8ecff",
          300: "#75c2ff",
          500: "#168cff",
          600: "#006fe6",
          800: "#075099",
        },
        silver: "#d8dee9",
        ink: "#05070d",
      },
      boxShadow: {
        glow: "0 0 32px rgba(22, 140, 255, 0.24)",
        panel: "0 18px 70px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
