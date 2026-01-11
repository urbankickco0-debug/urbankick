// Mapeo de nombres de archivo a URLs directas de Google Drive
// Estas URLs se pueden generar usando: https://drive.google.com/uc?export=view&id=FILE_ID
// Para producción, considera usar un proxy o descargar las imágenes a un CDN

export function getDriveImageUrl(filename: string, categoria: 'Hombre' | 'Dama'): string {
  // Por ahora, usamos placeholders. En producción, deberías:
  // 1. Usar la API de Drive para obtener URLs directas
  // 2. O descargar las imágenes a tu propio CDN/storage
  // 3. O usar un proxy que sirva las imágenes de Drive
  
  // Placeholder image service (reemplazar en producción)
  const width = 800;
  const height = 800;
  const seed = filename.split('.')[0];
  
  // Usando picsum.photos como placeholder temporal
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export function getPlaceholderImage(categoria: 'Hombre' | 'Dama'): string {
  return categoria === 'Hombre' 
    ? 'https://picsum.photos/seed/sneaker-men/800/800'
    : 'https://picsum.photos/seed/sneaker-women/800/800';
}

// Función para obtener el ID de archivo de Drive desde el nombre
// Esto requeriría implementar un mapeo o usar la API de Drive
export function getDriveFileId(filename: string): string | null {
  // TODO: Implementar mapeo de nombres de archivo a IDs de Drive
  // Por ahora retornamos null para usar placeholders
  return null;
}
