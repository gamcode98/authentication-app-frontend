/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'noto-sans': ['Noto Sans', 'sans-serif']
    },
    colors: {
      black: '#333333',
      gray: '#828282',
      'light-gray': '##BDBDBD',
      white: '#fff',
      blue: '#2F80ED',
      'light-blue': '#2D9CDB',
      red: '#EB5757'
    },
    extend: {}
  },
  plugins: []
}
