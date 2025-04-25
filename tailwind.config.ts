/** @type {import('tailwindcss').Config} */export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    "rounded-lg",
    "rounded-md",
    "rounded",
    "bg-gray-50",
    "p-2",
    "p-3",
    "p-4",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          laptop: '1280px',
          '2xl': '1400px'
        }
      },
      fontSize: {
        base: '14px' // Thay đổi font-size base ở đây
      },
      colors: {
      },
      boxShadow: {
        bottom: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      animation: {
        twinkle: 'twinkle 10s infinite ease-in-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // nextui(),
    require('tailwindcss-animate'),
  ]
}
