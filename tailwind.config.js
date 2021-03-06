module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'dark-blue-2': 'hsl(213, 19%, 22%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
    },
    borderRadius: {
      'card': '30px',
      'full': '50%',
      'submit': '50rem'
    },
    extend: {
      width: {
        'lg': '27rem',
      }
    }
  },
  plugins: [],
}
