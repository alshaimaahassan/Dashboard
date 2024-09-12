/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#007FAB',
      "logo":" #4880FF",
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    } 
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
}

