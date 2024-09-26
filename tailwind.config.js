/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./views/**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary':'#1F1F1F',
        'tertiary':'#111111',
        'quaternary':'#E6E6E6',
        'quinary':'#FF9900',
        'senary':'#7E7E7E',
        'septenary':'#9B9B9B',
        'octonary':'#181A20',
        'nonary':'#EFEFEF',
        'denary':'#575757',
        'eleven':'rgba(230, 230, 230, 0.1)',
        'twelve':'rgba(230, 230, 230, 0.7)',
        'thirteen':'rgba(87, 87, 87, 0.7)',
        'fourteen':'#2C2C2C',
        'fifteen':'#D9D9D9',
      },
      fontSize: {
        xs: '0.625rem',
      }
    },
  },
  plugins: [],
}

