module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      wordBreak: {
        'break-word': 'break-word',
      },
      animation: {
        floatOne: 'floatOne 15s infinite ease-in-out',
        floatTwo: 'floatTwo 20s infinite ease-in-out',
        floatThree: 'floatThree 17s infinite ease-in-out',
      },
      keyframes: {
        floatOne: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(100px, 50px) rotate(120deg)' },
          '66%': { transform: 'translate(50px, 100px) rotate(240deg)' },
        },
        floatTwo: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-80px, 100px) rotate(-120deg)' },
          '66%': { transform: 'translate(-100px, -50px) rotate(-240deg)' },
        },
        floatThree: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(70px, -70px) rotate(90deg)' },
          '66%': { transform: 'translate(-70px, 70px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
} 