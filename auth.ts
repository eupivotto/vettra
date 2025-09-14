import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
// Importe outros provedores que for usar, como Google, GitHub, etc.

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig, // Usa a configuração do seu arquivo auth.config.ts
  providers: [
    // Adicione seus provedores aqui. O array em auth.config.ts ficará vazio.
    Credentials({
      async authorize(credentials) {
        // Lógica para validar o usuário (ex: buscar no banco de dados)
        // Se a lógica de autenticação for complexa, defina-a aqui.
        // Por enquanto, vamos retornar um usuário mock para teste.
        if (credentials) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
          return user;
        }
        return null;
      },
    }),
    // Exemplo com outro provedor:
    // GitHub({
    //   clientId: process.env.AUTH_GITHUB_ID,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET,
    // }),
  ],
});
