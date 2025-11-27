/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'turquesa': '#64AEC5',
        'violeta': '#7F5DC9',
        'rojo': '#DB4E40',
        'naranja': '#E06D33',
        'verde': '#7EAB74',
        'amarillo': '#EAB04B'
      },
      boxShadow: {
        custom: '0 0 20px rgba(100,174,197,0.25), 0 0 40px rgba(127,93,201,0.2)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
