import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full',
    'after:absolute', 'after:bottom-0', 'after:left-0', 'after:h-0.5', 'after:w-0', 'after:bg-primary', 'hover:after:w-full', 'after:transition-all', 'after:duration-300', 'after:w-full',
    'text-primary', 'font-semibold',
    'bg-blue-100', 'border-blue-200', 'border-blue-300', 'border-blue-400',
    'bg-green-100', 'border-green-200', 'border-green-300',
    'bg-yellow-100', 'border-yellow-200',
    'bg-orange-100', 'border-orange-200',
    'bg-red-100', 'border-red-200',
    'bg-pink-100', 'border-pink-200',
    'bg-indigo-100', 'border-indigo-200',
    'bg-purple-100', 'border-purple-200',
    'bg-gray-100', 'border-gray-100', 'border-gray-200', 'border-gray-300',
    'bg-white', 'bg-white/90', 'bg-white/95',
    'hover:bg-blue-100', 'hover:border-blue-400', 'hover:bg-gray-50', 'hover:bg-gray-200', 'hover:border-primary', 'hover:bg-primary/10',
    'text-blue-700', 'text-green-700', 'text-yellow-700', 'text-orange-700', 'text-red-700', 'text-pink-700', 'text-indigo-700', 'text-purple-700', 'text-gray-700', 'text-gray-800',
    'bg-primary/10', 'text-primary', 'hover:bg-blue-100', 'hover:border-blue-400',
    'border', 'font-semibold', 'rounded-full', 'text-xs', 'px-3', 'py-1',
    { pattern: /bg-(blue|green|yellow|orange|red|pink|indigo|purple|gray|white)(-100|\/10|\/90|\/95)?/ },
    { pattern: /border-(blue|green|yellow|orange|red|pink|indigo|purple|gray)-(100|200|300|400)/ },
    { pattern: /text-(primary|blue-700|green-700|yellow-700|orange-700|red-700|pink-700|indigo-700|purple-700|gray-700|gray-800)/ },
    { pattern: /hover:bg-(blue-100|gray-50|gray-200|primary\/10)/ },
    { pattern: /hover:border-(blue-400|primary)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(6px)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.7",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.05)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s infinite",
        float: "float 5s ease-in-out infinite",
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-border": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
