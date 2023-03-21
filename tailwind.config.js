/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow.black,
      blue: colors.blue,
      red: colors.red,
      slate: colors.slate,
      green: colors.green,
      primary: {
        '100': '#F8F3E5',
        "50":"#D1E3C3",
        '100': '#EFE4C7',
        '600': '#B68D25',
        
      },
      secondary: {
        "50":"#F8F3E5",
        '100': '#E3F0D8',
        '600': '#72B63D'
      }
    },
    extend: {
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
}