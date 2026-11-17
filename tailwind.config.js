module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#ECECDD",
        forest: "#212B14",
        moss: "#3B4630",
        mist: "#E1EBEC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        western: ["var(--font-western)", "serif"],
      },
    },
  },
  plugins: [],
};
