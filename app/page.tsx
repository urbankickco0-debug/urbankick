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
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 animate-fade-in">
            UrbanKick
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl mx-auto animate-slide-up">
            Sneakers premium en Colombia. Autenticidad garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link
              href="/catalogo"
              className="btn-primary inline-block"
            >
              Ver Catálogo
            </Link>
            <a
              href="https://wa.me/573216841147"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
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

      {/* Features Section */}
      <section className="bg-carbon-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-bold uppercase mb-2">100% Originales</h3>
              <p className="text-gray-400">
                Todos nuestros productos son auténticos y verificados.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-bold uppercase mb-2">Contra Entrega</h3>
              <p className="text-gray-400">
                En Pereira y Dosquebradas. Paga cuando recibas tu pedido.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-bold uppercase mb-2">Envío Nacional</h3>
              <p className="text-gray-400">
                Llevamos tus sneakers a cualquier parte de Colombia.
              </p>
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
