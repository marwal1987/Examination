/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      snow: "#F4F3F1",
      ash: "#EEEEEE",
      clay: "#605858",
      coal: "#353131",
      "dark-mint": "#489078",
      "shade-24-dark": "rgba(53, 49, 49, 0.24)",
      "shade-24-light": "rgba(241, 240, 236, 0.24)",
      "shade-12-light": "rgba(241, 240, 236, 0.12)",
      red: "#EB5757",
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 1px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
