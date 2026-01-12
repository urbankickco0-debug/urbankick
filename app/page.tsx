import Link from 'next/link';
import { fetchProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const revalidate = 60; // ISR: revalidar cada 60 segundos

export default async function Home() {
  const allProducts = await fetchProducts();
  const featuredProducts = allProducts.filter(p => p.estado === 'disponible').slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 animate-fade-in text-white">
            UrbanKick
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up font-light leading-relaxed">
            Sneakers premium en Colombia. <br className="hidden md:block" />
            <span className="text-white font-medium">Autenticidad garantizada.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Link href="/catalogo" className="btn-primary">
              Ver Catálogo
            </Link>
            <a
              href="https://wa.me/573216841147"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
            Destacados
          </h2>
          <Link
            href="/catalogo"
            className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            Ver todos →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section - Minimalista */}
      <section className="border-y border-white/10 bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="text-center py-4 md:py-0 px-4">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-white">100% Originales</h3>
              <p className="text-sm text-gray-500">Autenticidad verificada</p>
            </div>

            <div className="text-center py-4 md:py-0 px-4">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-white">Contra Entrega</h3>
              <p className="text-sm text-gray-500">Pereira y Dosquebradas</p>
            </div>

            <div className="text-center py-4 md:py-0 px-4">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-white">Envío Nacional</h3>
              <p className="text-sm text-gray-500">Todo Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white text-black p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            ¿Buscas algo específico?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Contáctanos por WhatsApp y te ayudamos a encontrar el par perfecto.
          </p>
          <a
            href="https://wa.me/573216841147"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </section>
    </div>
  );
}
