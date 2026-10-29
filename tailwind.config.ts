import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'var(--font-geist-sans)', 'Poppins', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ewem: {
          bg: '#FAFCFC',
          card: '#FFFFFF',
          primary: '#1E232A',
          secondary: '#64748B',
          border: 'rgba(226, 232, 240, 0.7)',
          mint: {
            light: '#E6F8F3',
            DEFAULT: '#A7E8D8',
            dark: '#10B981',
          },
          blue: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            soft: '#EFF6FF',
          },
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft-sm': '0 2px 10px -2px rgba(15, 23, 42, 0.03), 0 1px 3px -1px rgba(15, 23, 42, 0.02)',
        'soft-md': '0 10px 25px -4px rgba(15, 23, 42, 0.04), 0 4px 10px -2px rgba(15, 23, 42, 0.02)',
        'soft-lg': '0 20px 40px -8px rgba(15, 23, 42, 0.06), 0 6px 16px -4px rgba(15, 23, 42, 0.03)',
        'folder-glow': '0 16px 36px -8px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
