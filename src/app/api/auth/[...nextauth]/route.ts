import NextAuth from "next-auth";
import type { AuthOptions } from 'next-auth';

// Configuração simplificada sem dependências do Prisma
const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile }) {
      // Por enquanto, permite todos os logins
      return true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async session({ session, token }) {
      // Retorna a sessão sem modificações
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async jwt({ token, user }) {
      // Retorna o token sem modificações
      return token;
    },
  },
  providers: [
    // Seus provedores (atualmente vazio, o que está correto)
  ],
  // Usar JWT em vez de banco de dados para sessões
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
