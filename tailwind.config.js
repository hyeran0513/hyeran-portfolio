import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";
 
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.12)' },
        },
      },
      animation: {
        twinkle: 'twinkle 1.8s ease-in-out infinite',
      },
      screens: {
        web: "1280px",
        tablet: "1024px",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
        },
        border: {
          primary: "var(--border-primary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        }
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hero-1": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "90px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".hero-2": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "60px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".hero-3": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "40px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-1": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "32px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-2": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "28px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-3": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "800",
          fontSize: "20px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-4": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-5": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-6": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".heading-7": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "600",
          fontSize: "12px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".body-1": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".body-2": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".body-3": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".body-4": {
          fontFamily: "var(--font-pretendard)",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
      });
    }),
  ],
};

export default config;
