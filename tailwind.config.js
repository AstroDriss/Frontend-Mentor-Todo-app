/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        Check:
          "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
      colors: {
        primaryBlue: "hsl(220 98% 61% / <alpha-value>)",
        veryLightGray: "hsl(var(--Very-Light-Gray) / <alpha-value>)",
        veryLightGrayishBlue:
          "hsl(var(--Very-Light-Grayish-Blue) / <alpha-value>)",
        lightGrayishBlue: "hslvar(--Light-Grayish-Blue) / <alpha-value>)",
        darkGrayishBlue: "hsl(var(--Dark-Grayish-Blue) / <alpha-value>)",
        veryDarkGrayishBlue:
          "hsl(var(--Very-Dark-Grayish-Blue) / <alpha-value>)",

        dark: {
          VeryDarkBlue: "hsl(235 21% 11%)",
          VeryDarkDesaturatedBlue: "hsl(235 24% 19%)",
          LightGrayishBlue: "hsl(234 39% 85%)",
          lightGrayishBlueHover:
            "hsl(var(--Light-Grayish-Blue-hover) / <alpha-value>)",
          DarkGrayishBlue: "hsl(234 11% 52%)",
          "VeryDarkGrayishBlue-1": "hsl(233 14% 35%)",
          "VeryDarkGrayishBlue-2": "hsl(237 14% 26%)",
        },
      },
    },
  },
  plugins: [],
};
