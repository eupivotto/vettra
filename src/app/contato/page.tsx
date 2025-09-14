import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contato() {
  // URL do Google Maps para o endereço da Vettra
  // Você pode gerar uma nova no Google Maps e colar aqui
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1911.5413047227178!2d-49.21671488695922!3d-16.622622698191872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv.%20Vera%20Cruz%2C%20Quadra%2093%2C%20Lote%2002%20Jardim%20Guanabara%20-%20Goi%C3%A2nia-GO!5e0!3m2!1spt-BR!2sbr!4v1757603598086";

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-2xl text-white" />,
      label: 'WhatsApp',
      value: '(62) 99314-9017',
      href: 'https://wa.me/5562993149017',
    },
    {
      icon: <FaInstagram className="text-2xl text-white" />,
      label: 'Instagram',
      value: '@vettra_br',
      href: 'https://instagram.com/vettra_br',
    },
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      label: 'E-mail',
      value: 'atendimento@grupovettra.com.br',
      href: 'mailto:atendimento@grupovettra.com.br',
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e7a8c]">Entre em Contato</h1>
          <p className="text-lg text-gray-600 mt-2">Estamos prontos para atender você.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Coluna de Informações de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nossos Canais</h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-[#1e7a8c] p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-[#1e7a8c] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t my-8"></div>

            <div className="flex items-center">
              <div className="bg-[#1e7a8c] p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Nosso Showroom</p>
                <p className="text-gray-600">
                  Av. Vera Cruz, Quadra 93, Lote 02 <br/> Jardim Guanabara - Goiânia-GO
                </p>
              </div>
            </div>
          </div>
          
          {/* Coluna do Mapa */}
          <div className="w-full h-96 lg:h-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </main>
  );
}
