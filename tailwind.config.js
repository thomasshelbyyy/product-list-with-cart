/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "hsl(14, 86%, 42%)",
        "custom-green": "hsl(159, 69%, 38%)",
        "custom-rose-50": "hsl(20, 50%, 98%)",
        "custom-rose-100": "hsl(13, 31%, 94%)",
        "custom-rose-300": "hsl(14, 25%, 72%)",
        "custom-rose-400": "hsl(7, 20%, 60%)",
        "custom-rose-500": "hsl(12, 20%, 44%)",
        "custom-rose-900": "hsl(14, 65%, 9%)"
      }
    },
  },
  plugins: [],
}

