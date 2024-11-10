/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors:{
        // primary colors
        'Red':'hsl(0, 100%, 68%)',
        'hover-red': 'hsl(0, 100%, 78%)',
        // neutral colors
        'Very-Dark-Blue': 'hsl(230, 29%, 20%)',
        'Dark-Grayish-Blue': 'hsl(230, 11%, 40%)',
        'Grayish-Blue': 'hsl(231, 7%, 65%)',
        'Light-Grayish-Blue': 'hsl(207, 33%, 95%)',
      }
    },
    fontFamily:{
      'barlow-regular': ['barlow-regular', 'sans-serif'],
      'barlow-bold': ['barlow-bold', 'sans-serif']
    }
  },
  plugins: [],
}

