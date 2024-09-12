/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js, ts, tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Oxygen Mono', 'monospace']
    },
    extend: {colors: {
      bg: '#1a1a1a',
      bglt: '#282828',
      text: '#fff'
    }},
  },
  plugins: [],
}

