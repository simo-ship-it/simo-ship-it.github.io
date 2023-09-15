/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'rosa': '#FFE8E8',
        'rosa-pelle': '#E59D81',
        'salmone' : '#F1B5A8',
        'rosso' : '#6D1010',
        'rosso-2' : '#9D4242'
      },
      maxWidth: {
        'micro': '64px',
        'milli': '128px',
      },
      minWidth: {
        'mezzo': '50%',
      }
    },
  },
  plugins: [],
}

