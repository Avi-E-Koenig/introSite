const { typewindTransforms } = require('typewind/transform');

// Define animation keyframes
const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    wave: {
      "0%": { transform: "rotate(0deg)" },
      "10%": { transform: "rotate(14deg)" },
      "20%": { transform: "rotate(-8deg)" },
      "30%": { transform: "rotate(14deg)" },
      "40%": { transform: "rotate(-4deg)" },
      "50%": { transform: "rotate(10deg)" },
      "60%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    "fade-in": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    "fade-out": {
      "0%": { opacity: "1" },
      "100%": { opacity: "0" },
    },
    "slide-in": {
      "0%": { transform: "translateY(100%)" },
      "100%": { transform: "translateY(0)" },
    },
    like: {
      "0%": { transform: "scale(1.5)" },
      "100%": { transform: "scale(1)" },
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "wave": "wave 2.1s infinite",
    "fade-in": "fade-in 0.2s ease-out",
    "fade-out": "fade-out 0.2s ease-out",
    "slide-in": "slide-in 0.2s ease-out",
    "like": "like 0.85s forwards"
  },
};

module.exports = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}'],
    transform: typewindTransforms,
    // files: [
    //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // ],
    // transform: typewindTransforms,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          purple: "#c770f0",
        },
        secondary: {
          DEFAULT: "#2d1950",
          hover: "#a24dd386",
          purple: {
            light: "#934cce5e",
            dark: "#8a49a8",
          }
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          purple: "#be50f4",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        nav: {
          bg: "#1b1a2ea9",
          mobile: "#181a27",
        },
        scrollbar: {
          track: "#2d1950",
          thumb: "rgba(178, 121, 216, 0.959)",
          hover: "rgba(222, 130, 235, 0.911)",
        }
      },
      backgroundImage: {
        'section-gradient': 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))',
        'image-gradient': 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863))',
        'home-section': 'url("/home-bg.jpg")',
      },
      boxShadow: {
        'nav': '0px 10px 10px 0px rgba(9, 5, 29, 0.171)',
        'project': '0 4px 5px 3px rgba(119, 53, 136, 0.459)',
        'project-hover': '0 4px 4px 5px rgba(129, 72, 144, 0.561)',
        'tech': '4px 5px 4px 3px rgba(89, 4, 168, 0.137)',
        'social': '0 0 15px #801f95',
      },
      fontSize: {
        'nav': '1.2rem',
        'nav-mobile': '1.4rem',
        'heading': '2.4em',
        'heading-name': '2.5em',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'navbar': 'all 0.3s ease-out',
      },
      backdropFilter: {
        'nav': 'blur(15px)',
      },
      ...animations,
    },
  },
  plugins: [],
};