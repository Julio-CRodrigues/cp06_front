"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Cabecalho from '@/app/components/Cabecalho/cabecalho';
import Rodape from '@/app/components/Rodape/rodape';

interface Evaluation {
  type: string;
  description: string;
  grade: number;
}

const avaliacoes: Record<string, { name: string; evaluations: Evaluation[] }> = {
  1: {
    name: "Adriano Barutti",
    evaluations: [],
  },
  2: {
    name: "Gustavo de Aguiar",
    evaluations: [],
  },
  3: {
    name: "João Lopes",
    evaluations: [],
  },
  4: {
    name: "Julio Cesar",
    evaluations: [],
  },
  5: {
    name: "Marcel Kenzo",
    evaluations: [],
  },
};

export default function AvaliacoesPage() {
  const params = useParams();
  const id = Number(params?.id);
  const aluno = avaliacoes[id]; 

  if (!aluno) {
    return <div>Aluno não encontrado</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const novaAvaliacao: Evaluation = {
      type: formData.get('type') as string,
      description: formData.get('description') as string,
      grade: Number(formData.get('grade')),
    };

    // Adiciona a nova avaliação ao aluno específico
    aluno.evaluations.push(novaAvaliacao);
    form.reset(); // Limpa o formulário após o envio
  };

  return (
    <>
      {/* Cabeçalho */}
      <Cabecalho />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Avaliações de {aluno.name}</h1>

        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input type="text" name="type" placeholder="Tipo de Avaliação" className="p-2 border rounded" required />
          <input type="text" name="description" placeholder="Descrição" className="p-2 border rounded" required />
          <input type="number" name="grade" placeholder="Nota" className="p-2 border rounded" required />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Adicionar Avaliação</button>
        </form>

        <div className="space-y-4">
          {aluno.evaluations.map((evaluation: Evaluation, index: number) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow">
              <h2 className="text-2xl font-bold">{evaluation.type}</h2>
              <p>{evaluation.description}</p>
              <p><strong>Nota:</strong> {evaluation.grade}</p>
            </div>
          ))}
        </div>

        {/* Botão para voltar à página principal */}
        <Link href="/" className="block mt-6 bg-pink-700 text-white text-center py-2 rounded hover:bg-pink-500">
          Voltar para Home
        </Link>
      </div>
      <Rodape />
    </>
  );
}
