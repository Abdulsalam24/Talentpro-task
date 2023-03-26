/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      // f8: '62px',
      // f7: '34px',
      // f6: '24px',
      // f5: '20px',
      // f4: '18px',
      // f3: "16px",
      // f2: "14px",
      // f1: "12px"
    },

    extend: {
      colors: {
        'blue': '#004DB3',
        'black': " #000F24",
        'orangeLight': '#FF8A71',
        'blueDeep': '#1B78DE',
        'bluish': '#2A2A2B;',
        'blueLight': "#81afdd",
        'blueLight2': "#71E5FF",
        'blueDark': '#000F24',

      },
    },
  },
  plugins: [],
}