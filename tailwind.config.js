module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  content: ['./build/*.{html,js}',],
  theme: {
    extend: {
      screens: {
        'sm': '480px'
      },
      colors: {
        'body': '#eef1f6',
        'primary': '#f1ac1a',
        'primary-hover': '#cd941a',
        'secondary': '#ffe032',
        'secondary-hover': '#e1c527',
        'tertiary': '#9fcc2e',
        'tertiary-hover': '#7a9e22',
        'light': '#eef1f6',
        'dark': '#58585a',
        'darker': '#434344',
        'slate': {
          light: '#77787b',
          DEFAULT: '#58585a',
          dark: '#424243'
        },
        'danger': '#d97b7e',
        'danger-border': '#621113',
        'success': '#bde2c1',
        'success-border': '#749c7a',
        'info': '#cff4fc',
        'info-border': '#6aacba',
        'warning': '#d57827',
        'warning-border': '#a65b1a'
      },
      fontFamily: {
        body: ['Open Sans', 'serif'],
        heading: ['Pacifico', 'serif']
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}