'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { filterProducts } from '@/lib/products';

function CatalogoContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [categoria, setCategoria] = useState<string>(searchParams.get('categoria') || 'Todos');
  const [estado, setEstado] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = filterProducts(products, {
      categoria: categoria === 'Todos' ? undefined : categoria,
      estado: estado === 'todos' ? undefined : estado,
      searchQuery,
    });
    setFilteredProducts(filtered);
  }, [products, categoria, estado, searchQuery]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className="mt-4 text-gray-400">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
        Catálogo
      </h1>

      {/* Filtros */}
      <div className="mb-12 space-y-6">
        {/* Búsqueda */}
        <div>
          <input
            type="text"
            placeholder="Buscar por nombre o SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 bg-carbon-900 border border-carbon-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Tabs de categoría */}
        <div className="flex flex-wrap gap-4">
          {['Todos', 'Hombre', 'Dama'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-6 py-2 uppercase tracking-wider text-sm font-bold transition-colors ${
                categoria === cat
                  ? 'bg-white text-black'
                  : 'bg-carbon-900 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtro de estado */}
        <div className="flex flex-wrap gap-4">
          {[
            { value: 'todos', label: 'Todos' },
            { value: 'disponible', label: 'Disponibles' },
            { value: 'agotado', label: 'Agotados' },
          ].map((est) => (
            <button
              key={est.value}
              onClick={() => setEstado(est.value)}
              className={`px-6 py-2 uppercase tracking-wider text-sm transition-colors ${
                estado === est.value
                  ? 'bg-carbon-700 text-white'
                  : 'bg-carbon-900 text-gray-500 hover:text-white'
              }`}
            >
              {est.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-6 text-gray-400">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
      </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No se encontraron productos con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className="mt-4 text-gray-400">Cargando catálogo...</p>
        </div>
      </div>
    }>
      <CatalogoContent />
    </Suspense>
  );
}
