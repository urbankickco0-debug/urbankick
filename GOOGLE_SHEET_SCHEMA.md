# Esquema del Google Sheet - UrbanKick CMS

## Columnas requeridas (en este orden exacto)

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| **SKU** | Texto | Identificador único del producto | `UK-H-001` |
| **Nombre** | Texto | Nombre del modelo del tenis | `Nike Air Max 90 Triple Black` |
| **Categoria** | Texto | `Hombre` o `Dama` | `Hombre` |
| **Precio** | Número | Precio en COP (opcional, dejar vacío si no aplica) | `450000` |
| **Tallas** | Texto | Tallas disponibles separadas por comas | `38,39,40,41,42` |
| **Estado** | Texto | `disponible` o `agotado` | `disponible` |
| **ImagenCover** | Texto | Nombre del archivo de imagen principal en Drive | `038652db-3716-47e0-b9d2-357b46fd9e65.JPG` |
| **ImagenesGaleria** | Texto | Nombres de archivos adicionales separados por comas (opcional) | `0622e4d7-c7da-4aaa-849c-ddc1d1325b42.JPG,0785a55a-7de4-4f87-83fc-7049c0405565.jpg` |

## Ejemplo de datos

```
SKU,Nombre,Categoria,Precio,Tallas,Estado,ImagenCover,ImagenesGaleria
UK-H-001,Nike Air Max 90 Triple Black,Hombre,450000,"38,39,40,41,42",disponible,038652db-3716-47e0-b9d2-357b46fd9e65.JPG,"0622e4d7-c7da-4aaa-849c-ddc1d1325b42.JPG,0785a55a-7de4-4f87-83fc-7049c0405565.jpg"
UK-H-002,Adidas Yeezy Boost 350,Hombre,850000,"39,40,41,42,43",disponible,0876d9f0-b55c-4a3d-9945-a52018b300cb.jpg,0b2c719d-ef2a-4a67-891d-ff1709e6bf36.jpg
UK-D-001,Nike Air Force 1 White,Dama,380000,"35,36,37,38,39",agotado,PHOTO-2025-12-22-12-12-18.jpg,"PHOTO-2025-12-22-12-12-19.jpg,PHOTO-2025-12-22-12-12-17.jpg"
```

## Instrucciones para publicar el Sheet

1. **Crear el Google Sheet** en tu cuenta de Google Drive
2. **Agregar los encabezados** exactamente como se muestra arriba (primera fila)
3. **Llenar los datos** de tus productos
4. **Publicar como CSV**:
   - Archivo → Compartir → Publicar en la web
   - Seleccionar: "Hoja 1" (o la hoja que uses)
   - Formato: "Valores separados por comas (.csv)"
   - Copiar la URL generada
5. **Guardar la URL** para configurarla en Vercel como `NEXT_PUBLIC_SHEET_CSV_URL`

## Cómo agregar nueva referencia (60 segundos)

1. Abrir el Google Sheet
2. Agregar nueva fila con los datos del producto
3. Guardar (se sincroniza automáticamente)
4. La web se actualizará en el próximo rebuild (ISR cada 60 segundos)

## Cómo marcar producto como agotado (10 segundos)

1. Abrir el Google Sheet
2. Buscar el SKU del producto
3. Cambiar la columna `Estado` de `disponible` a `agotado`
4. Guardar
5. La web mostrará el badge "Agotado" y deshabilitará el CTA de WhatsApp

## Notas importantes

- Los nombres de archivos de imágenes deben coincidir EXACTAMENTE con los nombres en Drive (incluyendo extensión)
- Las tallas deben estar separadas por comas sin espacios: `38,39,40,41`
- El precio es opcional, si no se especifica no se mostrará en la web
- Las imágenes de galería son opcionales, si solo hay una imagen dejar la columna `ImagenesGaleria` vacía
