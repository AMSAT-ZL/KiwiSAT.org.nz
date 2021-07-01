module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
};
