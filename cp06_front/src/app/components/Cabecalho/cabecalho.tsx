
import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PORTFÓLIO FIAP</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/sobre" className="hover:underline">
                Sobre o Projeto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
