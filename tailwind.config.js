/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sup': "url('/src/assets/img/OurTeam/sup.png')",
      },
      
    },
  },
  plugins: [require("daisyui")],
}

