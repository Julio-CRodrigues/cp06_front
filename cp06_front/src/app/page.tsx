import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Portfólio Acadêmico</h1>
      <div className="grid grid-cols-3 gap-4">
      <Link href="/checkpoints" className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
        CheckPoints
      </Link>

      <Link href="/globalSolution" className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
        Global Solution
      </Link>

      <Link href="/challengerSprints" className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
        Challenger Sprints
      </Link>

      </div>
    </div>
  );
}
