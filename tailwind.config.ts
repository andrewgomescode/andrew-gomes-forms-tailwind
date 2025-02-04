import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },

      borderWidth: {
        6: "6px",
      },

      colors: {
        violet: {
          25: "#fcfaff",
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        // slideUpAndFade: {
        //   from: { opacity: "1" },
        //   to: { opacity: "0" },
        // },
      },

      animation: {
        slideDownAndFade: "slideDownAndFade 0.4s",
        // slideUpAndFade: "slideUpAndFade 1s linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
