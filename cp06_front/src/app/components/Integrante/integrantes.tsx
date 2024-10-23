import Image from 'next/image';
import Link from 'next/link';

const integrantes = [
  {
    nome: "Adriano Barutti",
    imagem: "/img/adriano.jpg", // Caminho correto para a imagem
  },
  {
    nome: "Gustavo de Aguiar",
    imagem: "/img/gustavo.png", // Caminho correto para a imagem
  },
  {
    nome: "João Lopes",
    imagem: "/img/joao.jpg", // Caminho correto para a imagem
  },
  {
    nome: "Julio Cesar",
    imagem: "/img/julio.png", // Caminho correto para a imagem
  },
  {
    nome: "Marcel Kenzo",
    imagem: "/img/marcel.jpg", // Caminho correto para a imagem
  },
];

export default function Integrantes() {
  return (
    <div>
      {integrantes.map((integrante, index) => (
        <div key={index} className="text-center">
          
          <Image
            src={integrante.imagem}
            alt={integrante.nome}
            width={160} 
            height={160} 
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{integrante.nome}</h2>
          <Link href={`/integrantes/${index + 1}`} className="text-white hover:underline">
            Ver Avaliações
          </Link>
        </div>
      ))}
    </div>
  );
}
