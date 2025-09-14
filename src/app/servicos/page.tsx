import Image from 'next/image';

const servicos = [
  {
    titulo: 'Piso Vinílico Colado',
    descricao: 'Venda e instalação de piso vinílico com fixação por cola, garantindo máxima aderência e durabilidade.',
    // Imagem genérica - substitua pela sua
    imagemUrl: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Piso Vinílico Clicado',
    descricao: 'Instalação prática e rápida com sistema de encaixe, ideal para obras sem sujeira.',
    imagemUrl: 'https://images.unsplash.com/photo-1594484208280-efa0a7c35dd7?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Piso Laminado Clicado',
    descricao: 'Solução elegante e resistente com a beleza da madeira e a praticidade do sistema de clique.',
    imagemUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Painéis Ripados',
    descricao: 'Design moderno para ambientes internos e externos, agregando sofisticação e aconchego.',
    imagemUrl: 'https://images.unsplash.com/photo-1633534502845-56a04557b773?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Drywall e Rebaixamento',
    descricao: 'Construção de paredes, divisórias e tetos com agilidade, versatilidade e acabamento perfeito.',
    imagemUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Boiserie',
    descricao: 'Molduras decorativas que trazem um toque clássico e elegante para suas paredes.',
    imagemUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631f379?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Carpetes',
    descricao: 'Conforto térmico e acústico para ambientes corporativos e residenciais, com diversas opções de cores e texturas.',
    imagemUrl: 'https://images.unsplash.com/photo-1574636921272-363e728b49e2?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Rodapés Sob Medida',
    descricao: 'Acabamento essencial que valoriza o ambiente, disponível em diferentes materiais e estilos.',
    imagemUrl: 'https://images.unsplash.com/photo-1585423035312-3b1a23b9d073?w=500&auto=format&fit=crop&q=60'
  },
  {
    titulo: 'Grama Sintética',
    descricao: 'Beleza e praticidade para áreas de lazer, jardins e varandas, com baixa manutenção.',
    imagemUrl: 'https://images.unsplash.com/photo-1619717838384-5855f750b321?w=500&auto=format&fit=crop&q=60'
  }
];

export default function ServicosPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e7a8c] mb-2">
            Serviços que Nós Oferecemos
          </h1>
          <p className="text-lg text-gray-600">
            Soluções completas para transformar o seu ambiente.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div 
              key={servico.titulo} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={servico.imagemUrl}
                  alt={`Imagem ilustrativa de ${servico.titulo}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600">
                  {servico.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
