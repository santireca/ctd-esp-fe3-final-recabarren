/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(https://images.unsplash.com/photo-1592372554345-22ced975691d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2138&q=80)'
      },
      colors: {
        'my-white': '#e8f7ff',
        'my-black': '#0D0D0D',
      }
    },
  },
  plugins: [],
}