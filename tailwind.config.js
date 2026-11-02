/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F3A5F',
        coral: '#FF7A6B',
        turquoise: '#2EC4B6',
        sunny: '#FFD23F',
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(14px)' },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        wiggle: 'wiggle 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
