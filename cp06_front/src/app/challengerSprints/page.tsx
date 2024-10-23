import Link from 'next/link';

const ChallengerSprintsPage = () => {
  const sprints = [
    { id: 1, title: "Sprint 1", task: "Desafio de API", grade: 7.8 },
    { id: 2, title: "Sprint 2", task: "Desafio de Front-End", grade: 9.2 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Challenger Sprints</h1>
      <ul>
        {sprints.map((sprint) => (
          <li key={sprint.id} className="mb-4 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold">{sprint.title}</h2>
            <p>Tarefa: {sprint.task}</p>
            <p>Nota: {sprint.grade}</p>
            <Link href={`/challengerSprints/${sprint.id}`} className="text-blue-500 hover:underline">
              Ver Detalhes
            </Link>
          </li>
        ))}
      </ul>

      {/* Botão de retorno para a home */}
      <Link href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Voltar para Home
      </Link>
    </div>
  );
};

export default ChallengerSprintsPage;
