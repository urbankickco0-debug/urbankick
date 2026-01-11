export interface Product {
  sku: string;
  nombre: string;
  categoria: 'Hombre' | 'Dama';
  precio?: number;
  tallas: string[];
  estado: 'disponible' | 'agotado';
  imagenCover: string;
  imagenesGaleria: string[];
}

export interface ProductFilter {
  categoria?: 'Hombre' | 'Dama' | 'Todos';
  estado?: 'disponible' | 'agotado' | 'todos';
  searchQuery?: string;
}
