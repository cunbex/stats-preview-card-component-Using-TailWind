/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-background": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        "main-heading-stats": "hsl(0, 0%, 100%)",
        "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-headings": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
        Lexend_Deca: ['"Lexend Deca"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
