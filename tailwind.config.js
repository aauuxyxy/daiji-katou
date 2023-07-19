/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      phone: '320px',
      // => @media (min-width: 320px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-in-fwd-center':
          'slide-in-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-left':
          'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-right':
          'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-under':
          'slide-under 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'rocket-init': 'rocket-init 1s ease-in-out both',
        'rocket-alive': 'rocket-alive 0.5s ease-in-out both',
        'rocket-go': 'rocket-go 0.5s ease-in-out both',
      },
      keyframes: {
        'slide-in-fwd-center': {
          '0%': {
            transform: 'translateZ(-1400px)',
            opacity: '0',
          },
          to: {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        'slide-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-under': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'rocket-init': {
          '0%': {
            transform: 'translateY(300px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'rocket-go': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateY(-1000px)',
            opacity: '0',
          },
        },
        'rocket-alive': {
          '0%': {
            transform: 'translateY(100px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      fontFamily: {
        body: [
          'Avenir',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'YuGothic',
          'Yu Gothic',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
