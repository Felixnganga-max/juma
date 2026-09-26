/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1c1a17",
        stone: {
          100: "#f4efe6",
          200: "#e9e0d1",
          300: "#d8ccb6",
        },
        bronze: {
          DEFAULT: "#9c7a45",
          dark: "#7d6136",
        },
        flame: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        ink: {
          DEFAULT: "#2a2622",
          soft: "#5c554c",
        },
      },
      fontFamily: {
        serif: ['"Tenor Sans"', "serif"],
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
