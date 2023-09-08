/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        'micro': '64px',
      },
      minWidth: {
        'mezzo': '50%',
      }
    },
  },
  plugins: [],
}

