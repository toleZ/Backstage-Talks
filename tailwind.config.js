/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        FF608C: "#FF608C",
        FFFFFF: "#FFFFFF",
        "00C1B5": "#00C1B5",
        FF6519: "#FF6519",
        FFBE00: "#FFBE00",
        "1D3FBB": "#1D3FBB",
        E30512: "#E30512",

        "00c1b5": "#00c1b5",
        ff651a: "#ff651a",
        ffbe00: "#ffbe00",
        "1d3fbb": "#1d3fbb",
        e30512: "#e30512",
        "251d20": "#251d20",
      },
    },
  },
  plugins: [],
};
