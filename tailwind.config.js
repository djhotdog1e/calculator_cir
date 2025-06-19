module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '38': '9.5rem', 
        '45': '11.25rem',
      },
      gridTemplateColumns: {
        'currency': '100px 1fr 1fr',
      },
      colors: {
        gray: {
          300: '#b8bec5',
        }
      }
    },
  },
  plugins: [],
}