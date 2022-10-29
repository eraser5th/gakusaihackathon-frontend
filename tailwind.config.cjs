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
      },
      "color": {
        "aizuGray": "#A4A4A4",
      },
      "text": {
        "aizuGray": "#A4A4A4",
      },
    },
  },
  plugins: [],
};
