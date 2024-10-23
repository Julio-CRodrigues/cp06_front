import Link from 'next/link';

const GlobalSolutionPage = () => {
  const projects = [
    { id: 1, title: "Projeto GS 1", description: "Sistema de Gerenciamento", grade: 9.0 },
    { id: 2, title: "Projeto GS 2", description: "Aplicativo de Controle Financeiro", grade: 8.5 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">GlobalSolution</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>Descrição: {project.description}</p>
            <p>Nota: {project.grade}</p>
            <Link href={`/globalSolution/${project.id}`} className="text-blue-500 hover:underline">
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

export default GlobalSolutionPage;
