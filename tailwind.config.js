/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // ml stands for 'mobile landscape'
        ml: {
          raw: '(min-width: 480px) and (max-width: 960px) and (max-height: 480px)',
        },
      },
    },
    plugins: [],
  }
}



