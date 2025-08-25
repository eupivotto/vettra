import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Inclui páginas no app router
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Seus componentes
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Se usar pasta src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#084f61', // Azul escuro para confiança e construção
        secondary: '#F3F4F6', // Cinza claro para fundos limpos
        accent: '#10B981', // Verde para destaques (sustentabilidade, grama sintética)
      },
    },
  },
  plugins: [],
};

export default config;
