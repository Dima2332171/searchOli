/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkTheme: '#050c2a',
        lightTheme: '#f2f5fa',
        colorDark: '#fdfdfd',
        colorGrey: '#f0f0f0',
      },
      fontFamily:{
        rainbow: ['Over the Rainbow', 'cursive'],
      },
      padding: {
        base: '40px',
      },
      height: {
        imageHeight: '560px'
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1028px',
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}

