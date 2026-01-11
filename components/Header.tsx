'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-carbon-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
            UrbanKick
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm uppercase tracking-wider transition-colors ${
                pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className={`text-sm uppercase tracking-wider transition-colors ${
                pathname === '/catalogo' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Catálogo
            </Link>
            <Link
              href="/catalogo?categoria=Hombre"
              className={`text-sm uppercase tracking-wider transition-colors ${
                pathname === '/catalogo' && pathname.includes('Hombre')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Hombre
            </Link>
            <Link
              href="/catalogo?categoria=Dama"
              className={`text-sm uppercase tracking-wider transition-colors ${
                pathname === '/catalogo' && pathname.includes('Dama')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Dama
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
