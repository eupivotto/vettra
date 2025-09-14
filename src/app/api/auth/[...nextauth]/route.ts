// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import type { AuthOptions } from 'next-auth'; // Garanta que está usando AuthOptions aqui também
import { authConfig } from "../../../../../auth.config";

const handler = NextAuth({
  ...authConfig,
  providers: [
    // Seus provedores (atualmente vazio)
  ],
} as AuthOptions);

export { handler as GET, handler as POST };
