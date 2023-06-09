/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        purple: "#ca5cdd",
        "dark-purple": "#23395d",
        blue: "#2cbce9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
       backgroundImage:(theme) =>({
        "gradient-rainbow":
        "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
        "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)",
       }),
       fontFamily:{
        playfair:["playfair Display", "serif"],
        opensans: ["open Sans", "sans-serif"]
       },
       content: { 
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",

       }

    },
    screens:{
      xs: "480px",
      small: "768px",
      md: "1080px",
    }
  },
  plugins: [],
}
