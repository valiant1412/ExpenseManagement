/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 8px 9px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        hoverBtn: "rgb(133, 192, 247)",
      },
    },
  },
  plugins: [],
};
