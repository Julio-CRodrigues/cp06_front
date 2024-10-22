import { useRouter } from 'next/router';

const ChallengerSprintDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Detalhes do Challenger Sprint {id}</h1>
      <p>Informações detalhadas sobre o desafio {id} aparecerão aqui.</p>
    </div>
  );
};

export default ChallengerSprintDetails;
