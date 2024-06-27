/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD111'
      }
    }
  },

  corePlugins: {
    preflight: false
  }
}
