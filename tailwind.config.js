module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Nunito'],
    },
    extend: {
      colors: {
        primary: '#87be56',
        secondary: '#fdad3e',
        tertiary: '#232323',
        error: '#FF493C',
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero.png')",
      }
    },
  },
  plugins: [],
}
