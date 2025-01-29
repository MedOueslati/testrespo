/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      
      
      colors: {
        'custom-gray-cyan': '#bfcfcf',
         customBlue: '#8b9cba',
         // Add your custom color
      },
            fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins
      },
      
    },
    
  },
  plugins: [],
};