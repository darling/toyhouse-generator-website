module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
  prefix: 'tw-'
};
