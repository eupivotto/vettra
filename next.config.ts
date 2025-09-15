import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CONFIGURAÇÃO DINÂMICA: 'export' para produção na HostGator, 'standalone' para outras produções
  output: process.env.DEPLOY_TARGET === 'hostgator' ? 'export' : 
          process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  
  images: {
    unoptimized: true, // Mantido como estava
  },
  
  // CORREÇÕES PARA RESOLVER O PROBLEMA DO PRISMA NO BUILD (mantidas)
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externaliza o Prisma Client para evitar problemas de bundling durante o build
      config.externals = [...(config.externals || []), '@prisma/client'];
    }
    return config;
  },
  
  // Gera um ID único para cada build (mantido)
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Configurações experimentais (mantidas)
  experimental: {
    // Configurações experimentais podem ser adicionadas aqui conforme necessário
  },
  
  // NOVAS CONFIGURAÇÕES PARA EXPORT ESTÁTICO (só ativam quando DEPLOY_TARGET=hostgator)
  ...(process.env.DEPLOY_TARGET === 'hostgator' && {
    trailingSlash: true,
    basePath: '',
    
    // Desabilita features que não funcionam com export estático
    swcMinify: true,
    
    // Configuração para export estático
    distDir: '.next',
  }),
};

export default nextConfig;
