import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { getDriveImageUrl } from '@/lib/images';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // SYSTEM LOCK: Uso estricto de getDriveImageUrl
  const imageUrl = getDriveImageUrl(product.imagenCover, product.categoria);

  return (
    <Link href={`/producto/${product.sku}`} className="group block hover-lift">
      {/* SYSTEM LOCK: Aspect Ratio Square Obligatorio */}
      <div className="relative aspect-square overflow-hidden bg-carbon-800 mb-4 border border-transparent group-hover:border-white/10 transition-colors">
        <Image
          src={imageUrl}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.estado === 'agotado' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-bold group-hover:text-gray-300 transition-colors line-clamp-2 leading-tight">
          {product.nombre}
        </h3>
        
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{product.categoria}</span>
          {product.precio && (
            <span className="text-base font-bold font-mono">
              ${product.precio.toLocaleString('es-CO')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
