const CheckPointsPage = () => {
  const checkpoints = [
    { id: 1, title: "Checkpoint 1", date: "10/10/2023", grade: 9.5 },
    { id: 2, title: "Checkpoint 2", date: "15/11/2023", grade: 8.7 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">CheckPoints</h1>
      <ul>
        {checkpoints.map((cp) => (
          <li key={cp.id} className="mb-4 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold">{cp.title}</h2>
            <p>Data: {cp.date}</p>
            <p>Nota: {cp.grade}</p>
            <a href={`/checkpoints/${cp.id}`} className="text-blue-500 hover:underline">Ver Detalhes</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckPointsPage;
