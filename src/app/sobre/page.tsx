export default function Sobre() {
  return (
    // Adiciona padding, flexbox para centralizar e altura mínima para ocupar a tela
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
        
        <h1 className="text-4xl font-bold text-[#1e7a8c] mb-4 text-center">
          Sobre a Vettra
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          A <span className="font-semibold text-gray-800">VETTRA</span> nasceu da convergência entre técnica, estética e sofisticação. Somos especializados em soluções construtivas de alto padrão, oferecendo desde pisos vinílicos e painéis ripados até drywall e muito mais.
        </p>

        <div className="border-t border-gray-200 my-8"></div>

        <h2 className="text-3xl font-semibold text-[#1e7a8c] mb-6 text-center">
          Nossos Diferenciais
        </h2>
        <ul className="space-y-4 text-gray-600 list-inside">
          <li className="flex items-start">
            <span className="text-[#1e7a8c] mr-3">✔</span>
            <span>Trabalhamos com marcas consagradas como <strong className="font-semibold">Tarkett</strong> e <strong className="font-semibold">Vinilforte</strong>.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1e7a8c] mr-3">✔</span>
            <span>Execução com precisão e garantia de até 10 anos em nossos serviços.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1e7a8c] mr-3">✔</span>
            <span>Equipe especializada e suporte completo ao arquiteto do projeto.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1e7a8c] mr-3">✔</span>
            <span>Garantimos uma obra limpa e rápida, sem interferir na sua rotina.</span>
          </li>
        </ul>

        <div className="border-t border-gray-200 my-8"></div>

        <div className="bg-[#f0f9ff] p-6 rounded-lg text-center">
          <h2 className="text-3xl font-semibold text-[#1e7a8c] mb-4">
            Visite nosso Showroom
          </h2>
          <p className="text-lg text-gray-700">
            Localizado na <strong className="font-semibold">Av. Vera Cruz - Goiânia</strong>. Agende sua visita e conheça nossas soluções de perto!
          </p>
        </div>
        
      </div>
    </main>
  );
}
