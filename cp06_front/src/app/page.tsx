import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Portfólio Acadêmico</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link href="/checkpoints">
          <a className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
            CheckPoints
          </a>
        </Link>
        <Link href="/globalSolution">
          <a className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
            GlobalSolution
          </a>
        </Link>
        <Link href="/challengerSprints">
          <a className="p-5 bg-white rounded shadow text-center hover:bg-gray-200">
            Challenger Sprints
          </a>
        </Link>
      </div>
    </div>
  );
}
