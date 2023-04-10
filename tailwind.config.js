/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          'url("https://www.intertech-group.com/wp-content/uploads/2016/05/ACSStreamingService.png")',
      },
    },
  },
  plugins: [],
};
