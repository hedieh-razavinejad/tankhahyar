export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Vazirmatn', 'sans-serif'] },
      colors: {
        // بژ (قبلاً کرمی بود، حالا خاکستری‌تر و گرم‌تر)
        beige: { 200: '#f6f0e6', 300: '#eadfcc', 400: '#dccdb3', 500: '#c9b595', 600: '#a8957a' },
        // سبز یشمی
        jade: { 300: '#7fe3bd', 400: '#3cc795', 500: '#00a86b', 600: '#008a58' },
        navy: { 700: '#183577', 800: '#10275a', 900: '#0a1a3a', 950: '#050d1f' }
      }
    }
  },
  plugins: []
}
