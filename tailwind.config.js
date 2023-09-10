/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'sfondo': "url('../src/images/background.svg')",
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

