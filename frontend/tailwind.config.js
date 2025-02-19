const { repeat } = require('rxjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/media/home/hero-image.jpg')"
      },
      fontSize: {
        'xxs': '0.7rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fugaz: ['Fugaz One', 'cursive'],
        kaushan: ['Kaushan Script', 'cursive'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', '64px'],
        h2: ['48px', '56px'],
        h3: ['40px', '48px'],
        h4: ['32px', '40px'],
        h5: ['24px', '32px'],
        h6: ['18px', '24px'],
        subtitle: ['16px', '24px'],
        body: ['16px', '26px'],
        bodySmall: ['14px', '20px'],
        action: ['15px', '16px'],
        caption: ['12px', '16px']
      },
      colors: {
        brandPrimary: '#FC5056',
        brandSecondary: '#16377D',
        brandYellow: '#F8D448',
        heading: '#051036',
        surface: '#F7F8F9',
        primaryPageTitleColor: '#051036',
        secondaryPageTitleColor: '#C4C4C4',
        successColor: '#AFE1AF',
        secondarySuccessColor: '#097969',
        errorColor: '#FC5056',
        warningColor: '#ffca6a',
        infoColor: '#97dcff'
      }
    },
  },
  plugins: [],
};
