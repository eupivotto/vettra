import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Importe outros provedores que for usar, como Google, GitHub, etc.

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig, // Usa a configuração do seu arquivo auth.config.ts
  providers: [
    // Adicione seus provedores aqui. O array em auth.config.ts ficará vazio.
    
    // Exemplo com outro provedor:
    // GitHub({
    //   clientId: process.env.AUTH_GITHUB_ID,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET,
    // }),
  ],
});
