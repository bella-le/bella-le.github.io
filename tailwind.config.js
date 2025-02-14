module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          rose: {
            DEFAULT: '#CE95A8',
            light: '#D4A5B5'
          },
          purple: '#C5B3E6',
          blue: '#B4D9EE',
          green: '#B8E6D0',
          cyan: '#B4E6E6',
          gold: '#F2D4A7'
        }
      },
      animation: {
        'eq1': 'equalizer1 1.2s ease-in-out infinite',
        'eq2': 'equalizer2 0.9s ease-in-out infinite',
        'eq3': 'equalizer3 1s ease-in-out infinite',
        'eq4': 'equalizer2 1.1s ease-in-out infinite',
        'eq5': 'equalizer1 0.8s ease-in-out infinite',
      },
      keyframes: {
        equalizer1: {
          '0%, 100%': { height: '3px', transform: 'scaleY(1)' },
          '50%': { height: '3px', transform: 'scaleY(3)' },
        },
        equalizer2: {
          '0%, 100%': { height: '3px', transform: 'scaleY(1)' },
          '50%': { height: '3px', transform: 'scaleY(2)' },
        },
        equalizer3: {
          '0%, 100%': { height: '3px', transform: 'scaleY(1)' },
          '50%': { height: '3px', transform: 'scaleY(4)' },
        },
      },
    },
  },
  plugins: [],
}
  