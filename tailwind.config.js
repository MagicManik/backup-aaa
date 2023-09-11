/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        aaa: '1440px'
      },
      colors: {
        green: {
          normal: '#0e9749',
          dark: '#0b7438',
          light: '#0ebb59',
          focus: '#38ed86',
          linkhover: '#085127',
          rgba: 'rgba(14,151,73,0.4)',
          white: '#f2faf5',
        },
        gray: {
          light: '#b1b1b1'
        },
        yellow: {
          star: '#f5c710'
        }
      },
    },
  },
  plugins: [],
}

