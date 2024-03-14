/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-stars": "url('../src/assets/background-stars.svg')",
      },
      colors: {
        darkBlue: "hsl(240, 67%, 8%)",
        darkGrey: "hsl(240, 17%, 26%)",
        lightGrey: "hsl(240, 6%, 54%)",
        white: "hsl(0, 0%, 100%)",
        mercury: "hsl(194, 48%, 49%)",
        venus: "hsl(33, 82%, 61%)",
        earth: "hsl(263, 67%, 51%)",
        mars: "hsl(10, 63%, 51%)",
        jupiter: "hsl(2, 68%, 53%)",
        saturn: "hsl(17, 73%, 46%)",
        uranus: "hsl(169, 73%, 44%)",
        neptune: "hsl(222, 87%, 56%)",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
      fontSize: {
        small: ".875rem",
        logo: "1.5rem",
        regular: "1rem",
        heading: "5rem",
        stats: "2.5rem",
        subHeading: "0.75rem",
        statsHeading: "0.6875rem",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      letterSpacing: {
        wide: "2.75px",
        little: "1px",
        negative: "-1.5px",
      },
    },
  },
  plugins: [],
};
