/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primaryColor:'#059669',
        myColor:'#B13D3D',
        newColor:"linear-gradient(240.98deg, #6C2261 -8.76%, #B13D3D 164.46%)",
        lightMyColor:'#f7e6f4f3',
        lightPrimary:"#bdf094",
        active: "#6C2261",
      
        primaryText: "#8A8A8A",
        bgColor: "#FBFBFB",
        bgSecondary:'#f1f5f9',
        secondaryText: "rgba(255, 255, 255, 0.7)",

      },
      fontFamily: {
        fontFamily: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
