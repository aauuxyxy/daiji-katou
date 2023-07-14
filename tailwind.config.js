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
          'slide-in-fwd-center 5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
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
