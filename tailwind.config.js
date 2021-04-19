module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "var(--light-primary)",
          DEFAULT: "var(--light-primary)",
          dark: "var(--dark-primary)",
        },
        primary_inv: {
          light: "var(--light-primary-invariant)",
          DEFAULT: "var(--light-primary-invariant)",
          dark: "var(--dark-primary-invariant)",
        },
        secondary: {
          light: "var(--light-secondary)",
          DEFAULT: "var(--light-secondary)",
          dark: "var(--dark-secondary)",
        },
        secondary_inv: {
          light: "var(--light-secondary-invariant)",
          DEFAULT: "var(--light-secondary-invariant)",
          dark: "var(--dark-secondary-invariant)",
        },
        background: {
          light: "var(--light-background)",
          DEFAULT: "var(--light-background)",
          dark: "var(--dark-background)",
        },
        surface: {
          light: "var(--light-surface)",
          DEFAULT: "var(--light-surface)",
          dark: "var(--dark-surface)",
        },
        onBackgroud: {
          light: "var(--light-on-background)",
          DEFAULT: "var(--light-on-background)",
          dark: "var(--dark-on-background)",
        },
        onSurface: {
          light: "var(--light-on-surface)",
          DEFAULT: "var(--light-on-surface)",
          dark: "var(--dark-on-surface)",
        },
        onPrimary: {
          light: "var(--light-on-primary)",
          DEFAULT: "var(--light-on-primary)",
          dark: "var(--dark-on-primary)",
        },
        onSecondary: {
          light: "var(--light-on-secondary)",
          DEFAULT: "var(--light-on-secondary)",
          dark: "var(--dark-on-secondary)",
        },
        gray: {
          light: "var(--light-gray)",
          DEFAULT: "var(--light-gray)",
          dark: "var(--dark-gray)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
