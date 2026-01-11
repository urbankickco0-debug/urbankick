import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { getDriveImageUrl } from '@/lib/images';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = getDriveImageUrl(product.imagenCover, product.categoria);

  return (
    <Link href={`/producto/${product.sku}`} className="group block">
      <div className="relative overflow-hidden bg-carbon-900 aspect-square mb-4">
        <Image
          src={imageUrl}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {product.estado === 'agotado' && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-bold group-hover:text-gray-300 transition-colors line-clamp-2">
          {product.nombre}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.categoria}</span>
          {product.precio && (
            <span className="text-base font-bold">
              ${product.precio.toLocaleString('es-CO')}
            </span>
          )}
        </div>

        {product.tallas.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tallas.slice(0, 5).map((talla) => (
              <span
                key={talla}
                className="text-xs bg-carbon-800 px-2 py-1 rounded"
              >
                {talla}
              </span>
            ))}
            {product.tallas.length > 5 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{product.tallas.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
