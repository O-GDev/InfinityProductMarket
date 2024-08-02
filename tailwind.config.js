/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.jsx'
  ],
  theme: {
    fontSize: {
      sm: '8px',
      md: '15px',
      t: '11px'
    },
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