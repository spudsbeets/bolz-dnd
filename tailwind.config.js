/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": "'Jacquard 12', system-ui",
        "pixel": "'Pixelify Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

