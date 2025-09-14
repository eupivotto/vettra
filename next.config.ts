import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Mantido comentado como estava
  images: {
    unoptimized: true,
  },
  
  // CORREÇÕES PARA RESOLVER O PROBLEMA DO PRISMA NO BUILD
  
  // Configuração webpack para externalizar o Prisma no servidor
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externaliza o Prisma Client para evitar problemas de bundling durante o build
      config.externals = [...(config.externals || []), '@prisma/client'];
    }
    return config;
  },
  
  // Configuração para build standalone em produção
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  
  // Gera um ID único para cada build
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Configurações experimentais válidas
  experimental: {
    // Configurações experimentais podem ser adicionadas aqui conforme necessário
  },
};

export default nextConfig;
