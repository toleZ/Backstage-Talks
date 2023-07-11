/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "00c1b5": "#00c1b5",
        ff651a: "#ff651a",
        ffbe00: "#ffbe00",
        "1d3fbb": "#1d3fbb",
        e30512: "#e30512",
      },
    },
  },
  plugins: [],
};
