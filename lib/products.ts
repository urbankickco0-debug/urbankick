import Papa from 'papaparse';
import { Product } from '@/types/product';

interface ProductRow {
  SKU: string;
  Nombre: string;
  Categoria: string;
  Precio: string;
  Tallas: string;
  Estado: string;
  ImagenCover: string;
  ImagenesGaleria: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const csvUrl = process.env.NEXT_PUBLIC_SHEET_CSV_URL;
  
  if (!csvUrl || csvUrl.includes('YOUR_SHEET_ID')) {
    // Retornar datos de ejemplo si no hay URL configurada
    return getMockProducts();
  }

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: 60 }, // ISR: revalidar cada 60 segundos
    });

    if (!response.ok) {
      console.error('Error fetching CSV:', response.statusText);
      return getMockProducts();
    }

    const csvText = await response.text();
    
    const parsed = Papa.parse<ProductRow>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const products: Product[] = parsed.data.map((row) => ({
      sku: row.SKU?.trim() || '',
      nombre: row.Nombre?.trim() || '',
      categoria: (row.Categoria?.trim() === 'Dama' ? 'Dama' : 'Hombre') as 'Hombre' | 'Dama',
      precio: row.Precio ? parseFloat(row.Precio.replace(/[^0-9.]/g, '')) : undefined,
      tallas: row.Tallas ? row.Tallas.split(',').map(t => t.trim()).filter(Boolean) : [],
      estado: (row.Estado?.trim().toLowerCase() === 'agotado' ? 'agotado' : 'disponible') as 'disponible' | 'agotado',
      imagenCover: row.ImagenCover?.trim() || '',
      imagenesGaleria: row.ImagenesGaleria 
        ? row.ImagenesGaleria.split(',').map(img => img.trim()).filter(Boolean)
        : [],
    }));

    return products.filter(p => p.sku && p.nombre);
  } catch (error) {
    console.error('Error parsing products:', error);
    return getMockProducts();
  }
}

export function getMockProducts(): Product[] {
  return [
    {
      sku: 'UK-H-001',
      nombre: 'Nike Air Max 90 Triple Black',
      categoria: 'Hombre',
      precio: 450000,
      tallas: ['38', '39', '40', '41', '42'],
      estado: 'disponible',
      imagenCover: '038652db-3716-47e0-b9d2-357b46fd9e65.JPG',
      imagenesGaleria: ['0622e4d7-c7da-4aaa-849c-ddc1d1325b42.JPG', '0785a55a-7de4-4f87-83fc-7049c0405565.jpg'],
    },
    {
      sku: 'UK-H-002',
      nombre: 'Adidas Yeezy Boost 350',
      categoria: 'Hombre',
      precio: 850000,
      tallas: ['39', '40', '41', '42', '43'],
      estado: 'disponible',
      imagenCover: '0876d9f0-b55c-4a3d-9945-a52018b300cb.jpg',
      imagenesGaleria: ['0b2c719d-ef2a-4a67-891d-ff1709e6bf36.jpg'],
    },
    {
      sku: 'UK-H-003',
      nombre: 'Jordan 1 Retro High',
      categoria: 'Hombre',
      precio: 680000,
      tallas: ['40', '41', '42', '43'],
      estado: 'disponible',
      imagenCover: '0c4e9228-92ec-4fb0-81af-845e398c99de.jpg',
      imagenesGaleria: ['0dc5e47e-2225-404b-add2-1a0d9e8429f6.JPG', '0f2466a2-0d7c-4eb9-91f1-0ea041346bf4.JPG'],
    },
    {
      sku: 'UK-D-001',
      nombre: 'Nike Air Force 1 White',
      categoria: 'Dama',
      precio: 380000,
      tallas: ['35', '36', '37', '38', '39'],
      estado: 'agotado',
      imagenCover: 'PHOTO-2025-12-22-12-12-18.jpg',
      imagenesGaleria: ['PHOTO-2025-12-22-12-12-19.jpg', 'PHOTO-2025-12-22-12-12-17.jpg'],
    },
    {
      sku: 'UK-D-002',
      nombre: 'Puma Suede Classic',
      categoria: 'Dama',
      precio: 320000,
      tallas: ['35', '36', '37', '38'],
      estado: 'disponible',
      imagenCover: 'PHOTO-2025-12-22-12-12-16.jpg',
      imagenesGaleria: ['PHOTO-2025-12-22-12-12-15.jpg'],
    },
    {
      sku: 'UK-D-003',
      nombre: 'New Balance 550',
      categoria: 'Dama',
      precio: 420000,
      tallas: ['36', '37', '38', '39'],
      estado: 'disponible',
      imagenCover: 'PHOTO-2025-12-22-12-12-14.jpg',
      imagenesGaleria: ['PHOTO-2025-12-22-12-12-13.jpg', 'PHOTO-2025-12-22-12-12-10.jpg'],
    },
  ];
}

export function filterProducts(products: Product[], filters: {
  categoria?: string;
  estado?: string;
  searchQuery?: string;
}): Product[] {
  let filtered = [...products];

  if (filters.categoria && filters.categoria !== 'Todos') {
    filtered = filtered.filter(p => p.categoria === filters.categoria);
  }

  if (filters.estado && filters.estado !== 'todos') {
    filtered = filtered.filter(p => p.estado === filters.estado);
  }

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.nombre.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query)
    );
  }

  return filtered;
}
