import Cabecalho from "../components/Cabecalho/cabecalho";
import Rodape from "../components/Rodape/rodape";
import Link from "next/link";

export default function Sobre() {
    return (
      <> 
      <Cabecalho />
      <div className="container mx-auto p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Sobre o Projeto</h1>
        <p>
          Este projeto foi desenvolvido para demonstrar as habilidades de front-end
          usando Next.js, Tailwind CSS e outras tecnologias. Ele inclui uma página
          de apresentação de integrantes, métodos de avaliação e navegação entre
          diferentes páginas.
        </p>
        <Link href="/" className="block mt-6 bg-pink-700 text-white text-center py-2 rounded hover:bg-pink-500">
          Voltar para Home
        </Link>
      </div>
      <Rodape />
    </>
    );
  }