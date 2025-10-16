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
      screens: {
        web: "1280px",
        tablet: "1024px",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        gmarketSans: ["var(--font-gmarket-sans)"],
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
      },
      boxShadow: {
        soft: "0px 4px 8px #00000005",
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hero-1": {
          fontFamily: "var(--font-gmarket-sans)",
          fontWeight: "800",
          fontSize: "80px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".hero-2": {
          fontFamily: "var(--font-gmarket-sans)",
          fontWeight: "800",
          fontSize: "60px",
          lineHeight: "150%",
          letterSpacing: "0%",
        },
        ".hero-3": {
          fontFamily: "var(--font-gmarket-sans)",
          fontWeight: "800",
          fontSize: "34px",
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
        ".hero-title": {
          "font-display": "swap",
          "contain": "layout style paint",
          "will-change": "auto",
          "transform": "translateZ(0)",
          "backface-visibility": "hidden",
        },
        ".hero-character": {
          "contain": "layout style paint",
          "will-change": "transform",
        },
        ".hero-bg": {
          "contain": "layout style paint",
        },
        ".hero-star": {
          "contain": "layout style paint",
          "will-change": "transform",
        },
        ".word-break-keep": {
          "word-break": "keep-all",
          "word-wrap": "break-word",
          "overflow-wrap": "break-word",
        },
        ".word-break-normal": {
          "word-break": "normal",
          "word-wrap": "normal",
          "overflow-wrap": "normal",
        },
      });
    }),
  ],
};

export default config;
