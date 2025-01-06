/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
      },
      spacing : {
        'p-section': '80px'
      },
      backgroundImage: {
        'contact': "url('/src/assets/contact-details-map.png')",
      }
    },
  },
  plugins: [],
  darkMode: "class"
}