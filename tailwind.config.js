/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haven: {
          50: '#f1f7f4',
          100: '#ddeee5',
          200: '#bcdccf',
          300: '#91c3b1',
          400: '#63a38e',
          500: '#418671',
          600: '#2f6c5a',
          700: '#26574a',
          800: '#1e433a',
          900: '#132d27',
          950: '#0a1916',
        },
        sand: {
          50: '#fcfbf8',
          100: '#f7f4ec',
          200: '#ede6d8',
          300: '#dfd2bc',
          400: '#cbb698',
          500: '#b59b77',
          600: '#9b7e5e',
          700: '#7d634c',
          800: '#5a483a',
          900: '#3c3128',
        },
        gold: {
          50: '#fbf8ed',
          100: '#f5edd2',
          200: '#ebd9a2',
          300: '#dfc270',
          400: '#d5ab48',
          500: '#bc8f2f',
          600: '#9c6f24',
          700: '#774f1e',
          800: '#5c3d1d',
          900: '#432d18',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
