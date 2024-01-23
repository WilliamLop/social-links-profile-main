/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-bold': ['"Inter Bold"', 'sans-serif'],
        'inter-regular': ['"Inter Regular"', 'sans-serif'],
        'inter-semibold': ['"Inter SemiBold"', 'sans-serif']
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        Gray: "hsl(0, 0%, 20%)",
        darkGray: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
        Green: "hsl(75, 94%, 57%)",
      },

    },
  },
  plugins: [],
}

