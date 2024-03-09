/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontfamily:{
        primary:["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

// font-family: "Montserrat", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;