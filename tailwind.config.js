/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#1A2535',
      'theme-blue': '#0095FA',
      'theme-lightBlue': '#F4F9FF',
      'black-alpha': 'rgba(13, 15, 19, 0)',
    },
    extend: {
      fontFamily: {
      robotoMedium: "robotoMedium",
      ptSerif: "ptSerif",
        roboto: "roboto",
      robotoBold:"robotoBold",
    },
    },
  },
  plugins: [],
}