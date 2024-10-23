"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Evaluation {
  type: string;
  description: string;
  grade: number;
}

const avaliacoes: Record<string, { name: string; evaluations: Evaluation[] }> = {
  1: {
    name: "Adriano Barutti",
    evaluations: [
      { type: "CPS (CheckPoints)", description: "Descrição do CheckPoint 1", grade: 9.5 },
      { type: "GS (GlobalSolution)", description: "Descrição do Global Solution 1", grade: 8.7 },
      { type: "Challenger Sprints", description: "Descrição do Sprint 1", grade: 9.0 },
    ],
  },
  2: {
    name: "Gustavo de Aguiar",
    evaluations: [
      { type: "CPS (CheckPoints)", description: "Descrição do CheckPoint 2", grade: 8.5 },
      { type: "GS (GlobalSolution)", description: "Descrição do Global Solution 2", grade: 7.7 },
      { type: "Challenger Sprints", description: "Descrição do Sprint 2", grade: 8.9 },
    ],
  },
  3: {
    name: "João Lopes",
    evaluations: [
      { type: "CPS (CheckPoints)", description: "Descrição do CheckPoint 3", grade: 9.0 },
      { type: "GS (GlobalSolution)", description: "Descrição do Global Solution 3", grade: 8.8 },
      { type: "Challenger Sprints", description: "Descrição do Sprint 3", grade: 9.1 },
    ],
  },
  4: {
    name: "Julio Cesar",
    evaluations: [
      { type: "CPS (CheckPoints)", description: "Descrição do CheckPoint 4", grade: 8.8 },
      { type: "GS (GlobalSolution)", description: "Descrição do Global Solution 4", grade: 7.9 },
      { type: "Challenger Sprints", description: "Descrição do Sprint 4", grade: 8.6 },
    ],
  },
  5: {
    name: "Marcel Kenzo",
    evaluations: [
      { type: "CPS (CheckPoints)", description: "Descrição do CheckPoint 5", grade: 9.2 },
      { type: "GS (GlobalSolution)", description: "Descrição do Global Solution 5", grade: 8.9 },
      { type: "Challenger Sprints", description: "Descrição do Sprint 5", grade: 9.0 },
    ],
  },
};

export default function AvaliacoesPage() {
  const params = useParams();
  const id = Number(params?.id);
  const aluno = avaliacoes[id]; 

  if (!aluno) {
    return <div>Aluno não encontrado</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Avaliações de {aluno.name}</h1>

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
      <Link href="/" className="block mt-6 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">
        Voltar para Home
      </Link>
    </div>
  );
}
