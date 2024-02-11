/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'caveat': ['Caveat', 'sans-serif'],
        'protest': ['Protest', 'sans-serif']
      }
    },
  },
  plugins: [],
}

