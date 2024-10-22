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
            <a href={`/challengersprints/${sprint.id}`} className="text-blue-500 hover:underline">Ver Detalhes</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengerSprintsPage;
