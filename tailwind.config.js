/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(358, 79%, 66%)',
        paleRed: 'hsl(357, 100%, 86%)',
        moderateBlue: 'hsl(238, 40%, 52%)',
        darkBlue: 'hsl(212, 24%, 26%)',
        grayishBlue: 'hsl(211, 10%, 45%)',
        lightGrayishBlue: 'hsl(239, 57%, 85%)',
        lightGray: 'hsl(223, 19%, 93%)',
        veryLightGray: 'hsl(228, 33%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
    },
    
  },
  plugins: [],
}