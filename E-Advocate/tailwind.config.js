/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // use the .dark class
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light / card tones (lightbg → gray-100)
        lightbg: colors.gray[100], // use as `bg-lightbg`
        lightcard: "#ffffff", // use as `bg-lightcard`

        // dark counterparts
        darkbg: colors.gray[900], // use as `dark:bg-darkbg`
        darkcard: colors.gray[800], // use as `dark:bg-darkcard`
      },
    },
  },
  plugins: [],
};
