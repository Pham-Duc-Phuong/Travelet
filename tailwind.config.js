/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'darkMode': '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',
        'dark-box': '0px 6px 10px 4px rgb(0 0 0 / 0.3)'
      },
      screens: {
        'phone': '280px'
      },
      dropShadow: {
        'logo': [
          "1px 0 #000", "-1px 0 #000", "0 1px #000", "0 -1px #000",
          "1px 1px #000", "-1px -1px #000", "1px -1px #000", "-1px 1px #000"
        ]
      },
      colors: {
        'white-rgba': 'rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}