"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Cabecalho from '@/app/components/Cabecalho/cabecalho';
import Rodape from '@/app/components/Rodape/rodape';

interface Evaluation {
  type: string; 
  description?: string; // Tornar description opcional
  grade: number;      
  link?: string; // Tornar link opcional
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
    
    const grade = Number(formData.get('grade'));

    if (isNaN(grade) || grade < 0 || grade > 100) {
      alert("A nota deve ser um número entre 0 e 100.");
      return;
    }

    const novaAvaliacao: Evaluation = {
      type: formData.get('type') as string,
      description: formData.get('feedback') as string || undefined, // Usar undefined se o feedback não for fornecido
      grade: grade,
      link: formData.get('link') as string || undefined, // Usar undefined se o link não for fornecido
    };

    try {
      const response = await fetch(`/api/avaliacoes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaAvaliacao),
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar avaliação');
      }

      aluno.evaluations.push(novaAvaliacao);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar avaliação. Tente novamente.");
    }
  };

  return (
    <>
      <Cabecalho />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Avaliações de {aluno.name}</h1>

        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input type="text" name="type" placeholder="Nome da Avaliação" className="p-2 border rounded" required />
          <input type="text" name="feedback" placeholder="Feedback" className="p-2 border rounded" /> {/* Removido o required */}
          <input type="number" name="grade" placeholder="Nota (0-100)" className="p-2 border rounded" required />
          <input type="text" name="link" placeholder="Link" className="p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Adicionar Avaliação</button>
        </form>

        <div className="space-y-4">
          {aluno.evaluations.map((evaluation: Evaluation, index: number) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow">
              <h2 className="text-2xl font-bold">{evaluation.type}</h2>
              <p><strong>Feedback:</strong> {evaluation.description || "Nenhum feedback fornecido"}</p> {/* Mensagem caso não haja feedback */}
              <p><strong>Nota:</strong> {evaluation.grade}</p>
              {evaluation.link && (
                <p>
                  <strong>Link:</strong> <a href={evaluation.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">{evaluation.link}</a>
                </p>
              )}
            </div>
          ))}
        </div>

        <Link href="/" className="block mt-6 bg-pink-700 text-white text-center py-2 rounded hover:bg-pink-500">
          Voltar para Home
        </Link>
      </div>
      <Rodape />
    </>
  );
}
