module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',     // 1280px
        '2xl': '1024px',  // 1536px
      },
    },
    extend: {
      colors: {},
      backgroundImage: theme => ({
        'hero-img': "url('/img/KiwiSAT-hero.jpg')",
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  content: [
    './src/**/*.html',
  ],
};
