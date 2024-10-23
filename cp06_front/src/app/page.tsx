import Image from 'next/image';
import Link from 'next/link';

const integrantes = [
  { id: 1, name: "Adriano Barutti", photo: "/img/adriano.jpeg" },
  { id: 2, name: "Gustavo de Aguiar", photo: "/img/gustavo.png" },
  { id: 3, name: "João Lopes", photo: "/img/joao.jpeg" },
  { id: 4, name: "Julio Cesar", photo: "/img/julio.jpg" },
  { id: 5, name: "Marcel Kenzo", photo: "/img/marcel.jpeg" },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      {/* Métodos de Avaliação */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Métodos de Avaliação</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">CPS (CheckPoints)</h2>
            <p>Avaliações intermediárias para acompanhamento do progresso.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">GS (GlobalSolution)</h2>
            <p>Projetos ou avaliações integradoras, que envolvem a aplicação global dos conhecimentos adquiridos.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Challenger Sprints</h2>
            <p>Avaliações em formato de desafios, com foco em resolução de problemas com entregas programadas.</p>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Integrantes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {integrantes.map((integrante) => (
            <div key={integrante.id} className="p-4 bg-gray-100 rounded shadow">
              <Image
                src={integrante.photo}
                alt={integrante.name}
                width={200}  // Defina a largura que deseja para as imagens
                height={200}  // Defina a altura
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{integrante.name}</h2>
              <Link href={`/avaliacoes/${integrante.id}`} legacyBehavior>
                <a className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">
                  Ver Avaliações
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
