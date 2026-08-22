/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emerald: { deep: '#143D2A', mid: '#1D5A3E', light: '#2A7A56' },
        gold: { base: '#C5A059', light: '#D4B87A', dark: '#A8863E' },
        warning: { soft: '#FEF2F2', border: '#FECACA', text: '#991B1B', bg: '#FEE2E2' }
      }
    }
  },
  plugins: [],
}