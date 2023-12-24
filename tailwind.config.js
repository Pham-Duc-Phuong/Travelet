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
        'dark-box': '0px 4px 10px 1px rgb(0 0 0 / 0.1)'
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
      gridTemplateColumns: {
        'search': 'repeat(4, 1fr) 48px',
        'room-sm': '60% auto',
        'account': "30% auto",
      },
    },
  },
  plugins: [],
}