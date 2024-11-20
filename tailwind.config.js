module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add other directories if needed
  ],
  theme: {
    extend: {
      colors: {
        'comeon-default': '#ccf7cc',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
