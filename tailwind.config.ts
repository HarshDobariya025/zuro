// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#1B7564',
        darkGreen: '#1A433A',
        lightBg: '#F0F1F599',
        darkText: '#000000',
        subtleGray: '#E0E0E0',
        zuroGreen: '#52D379', // Added this specific green for the icon background if not already there
      },
      fontFamily: {
        // This makes 'Inter' the default sans-serif font for Tailwind classes
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}