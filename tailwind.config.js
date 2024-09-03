/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcol:"#F5F6FA",
        textcol: "#334253",
        textdes: '#67727E',
        btn:'#C5C6EF',
        num: '#5357B6',
        sup: "#ED6368"
      }
    },
  },
  plugins: [],
}

