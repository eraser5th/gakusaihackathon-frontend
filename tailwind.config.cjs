/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "backgroundColor": {
        "aizuGreen": "#008484",
        "aizuLightGreen": "#E3F1F1",
        "aizuDark": "#555555",
        "aizuGray": "#A4A4A4",
        "aizuLightGray": "#F4F4F4",
      },
      "textColor": {
        "aizuGray": "#A4A4A4",
        "aizuDark": "#555555",
      },
      "text": {
        "aizuGray": "#A4A4A4",
      },
      "borderColor": {
        "aizuGreen": "#008484",
      },
    },
  },
  plugins: [],
};
