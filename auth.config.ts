import type { AuthOptions } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Callbacks padrão que sempre funcionam
    async signIn({ user, account, profile, email, credentials }) {
      // Por enquanto, permite todos os logins
      return true;
    },
    async session({ session, token, user }) {
      // Você pode adicionar dados extras à sessão aqui no futuro
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // Você pode modificar o JWT aqui no futuro
      return token;
    },
  },
  providers: [], // Será preenchido no arquivo route.ts
} satisfies AuthOptions;
