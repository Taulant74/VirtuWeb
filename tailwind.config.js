module.exports = {
  darkMode: "class", // Enable dark mode using the 'class' strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
    "./app/globals.css" // Include the global CSS file
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "var(--color-light-bg)",
        lightText: "var(--color-light-text)",
        darkBackground: "var(--color-dark-bg)",
        darkText: "var(--color-dark-text)",
      },
    },
  },
  plugins: [],
};
