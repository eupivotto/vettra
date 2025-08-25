import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#084f61',
        secondary: '#F3F4F6',
        accent: '#10B981',
        vettraPrimary: '#045060',
        vettraAccent: '#bdd8e3',
      },
    },
  },
  plugins: [],
};

export default config;
