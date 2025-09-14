import NextAuth from "next-auth";

// Cria um handler de autenticação simples e vazio por enquanto.
// Isso é suficiente para o NextAuth inicializar e o build passar.
const handler = NextAuth({
  providers: [
    // Deixamos os provedores vazios, pois não temos um sistema de login ainda.
  ],
});

// Exporta o handler para os métodos GET e POST, corrigindo o erro de "não ser um módulo".
export { handler as GET, handler as POST };
