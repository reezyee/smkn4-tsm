/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["'Titillium Web'", "serif"],
        bb: ["'Birthstone Bounce'", "serif"]
      },
    },
  },
  plugins: [],
};
