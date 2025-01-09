/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.7rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fugaz: ['Fugaz One', 'cursive'],
        kaushan: ['Kaushan Script', 'cursive'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        textWhite: '#FFFFFF',
        textRed: '#FC5056',
        textYellow: '#F8D448',
        headerBg: '#F7F8F9',
        headerTextColor: '#051036',
        footerBg: '#111111'
      }
    },
  },
  plugins: [],
};
