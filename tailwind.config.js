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
        on_backgroud: {
          light: "var(--light-on-background)",
          DEFAULT: "var(--light-on-background)",
          dark: "var(--dark-on-background)",
        },
        on_surface: {
          light: "var(--light-on-surface)",
          DEFAULT: "var(--light-on-surface)",
          dark: "var(--dark-on-surface)",
        },
        on_primary: {
          light: "var(--light-on-primary)",
          DEFAULT: "var(--light-on-primary)",
          dark: "var(--dark-on-primary)",
        },
        on_secondary: {
          light: "var(--light-on-secondary)",
          DEFAULT: "var(--light-on-secondary)",
          dark: "var(--dark-on-secondary)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
