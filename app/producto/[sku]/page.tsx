'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { getDriveImageUrl } from '@/lib/images';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function ProductoPage() {
  const params = useParams();
  const sku = params.sku as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then((products: Product[]) => {
        const found = products.find(p => p.sku === sku);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading product:', error);
        setLoading(false);
      });
  }, [sku]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className="mt-4 text-gray-400">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/catalogo" className="text-gray-400 hover:text-white transition-colors">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [product.imagenCover, ...product.imagenesGaleria];
  const currentImageUrl = getDriveImageUrl(allImages[selectedImage], product.categoria);

  const handleWhatsAppClick = () => {
    const link = generateWhatsAppLink(product.nombre, selectedSize);
    window.open(link, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/catalogo"
        className="inline-block mb-8 text-gray-400 hover:text-white transition-colors"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de imágenes */}
        <div>
          <div className="relative aspect-square bg-carbon-900 mb-4">
            <Image
              src={currentImageUrl}
              alt={product.nombre}
              fill
              className="object-cover"
              priority
            />
            
            {product.estado === 'agotado' && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="bg-red-600 text-white px-6 py-3 text-lg font-bold uppercase tracking-wider">
                  Agotado
                </span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square bg-carbon-900 ${
                    selectedImage === idx ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  } transition-opacity`}
                >
                  <Image
                    src={getDriveImageUrl(img, product.categoria)}
                    alt={`${product.nombre} - ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              {product.categoria}
            </span>
            <h1 className="text-4xl font-bold uppercase tracking-tighter mt-2 mb-4">
              {product.nombre}
            </h1>
            <p className="text-sm text-gray-500">SKU: {product.sku}</p>
          </div>

          {product.precio && (
            <div className="text-3xl font-bold">
              ${product.precio.toLocaleString('es-CO')}
            </div>
          )}

          {/* Selector de tallas */}
          {product.tallas.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                Selecciona tu talla
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {product.tallas.map((talla) => (
                  <button
                    key={talla}
                    onClick={() => setSelectedSize(talla)}
                    className={`py-3 text-center border transition-colors ${
                      selectedSize === talla
                        ? 'bg-white text-black border-white'
                        : 'bg-carbon-900 border-carbon-700 hover:border-white'
                    }`}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botón de WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            disabled={product.estado === 'agotado'}
            className={`w-full py-4 font-bold uppercase tracking-wider transition-colors ${
              product.estado === 'agotado'
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {product.estado === 'agotado' ? 'Producto Agotado' : 'Consultar Disponibilidad'}
          </button>

          {/* Información adicional */}
          <div className="border-t border-carbon-800 pt-6 space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <span>✓</span>
              <span>Producto 100% original y auténtico</span>
            </div>
            <div className="flex items-start gap-3">
              <span>📦</span>
              <span>Pago contra entrega en Pereira y Dosquebradas</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🚚</span>
              <span>Envíos a todo Colombia</span>
            </div>
            <div className="flex items-start gap-3">
              <span>💬</span>
              <span>Atención personalizada por WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
