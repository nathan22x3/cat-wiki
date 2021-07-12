const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './public/index.html',
    './src/components/**/*.{js,jsx}',
    './src/containers/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
  },
};
