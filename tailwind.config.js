/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.{html,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgfooter: "#232323",
      },
      fontFamily: {
        OpenSans: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
