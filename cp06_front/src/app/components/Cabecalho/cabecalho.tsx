import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">PORTFÓLIO FIAP</h1>
      <nav>
        <Link href="/sobre" className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-500">
          Sobre o Projeto
        </Link>
      </nav>
    </header>
  );
}