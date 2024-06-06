/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pie-chart': "url('/src/assets/pie-chart.png')"
      }
    },
  },
  plugins: [],
}