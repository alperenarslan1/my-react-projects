/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            title: ['"Pacifico"', "cursive"],
         },
         letterSpacing: {
            big: ".250em",
         },
      },
   },
   plugins: [],
};
