# 🔒 URBAN KICK SYSTEM LOCK
> Documento de Arquitectura Congelada. NO MODIFICAR SIN AUTORIZACIÓN DE NIVEL PRINCIPAL.

## 1. INVARIANTES VISUALES (NO TOCAR)

### Paleta de Colores
- **Fondo Principal**: `#0a0a0a` (Carbon Black)
- **Texto Principal**: `#f5f5f5` (Off White)
- **Acento**: Blanco Puro `#ffffff` (Solo para CTAs y bordes activos)
- **Gris Secundario**: `#404040` (Bordes sutiles)

### Tipografía
- **Familia**: `Geist Sans` (Vercel) para todo.
- **Títulos**: Uppercase, Tracking Tight/Tighter, Bold.
- **Cuerpo**: Regular, Tracking Normal.

### Layout Base
- **Container**: `mx-auto px-6` (Mobile First)
- **Grid Productos**: `repeat(auto-fill, minmax(300px, 1fr))`
- **Navbar**: Sticky, Backdrop Blur, Altura fija.

## 2. ARQUITECTURA DE DATOS (NO TOCAR)

### Fuente de Verdad
- **Google Sheet CSV**: Única fuente de datos dinámica.
- **Columnas Obligatorias**: `SKU`, `Nombre`, `Categoria`, `Precio`, `Estado`, `ImagenCover`.

### Flujo de Imágenes
- **Drive -> Web**: Las imágenes se cargan por URL directa.
- **Fallback**: Si falla la imagen, usar placeholder gris neutro, NO romper el layout.

## 3. COMPONENTES NUCLEARES (NO TOCAR)

### ProductCard.tsx
- Estructura fija: Imagen (aspect-square) -> Info -> Precio.
- Hover effect: `translate-y` sutil.
- NO agregar botones complejos dentro de la card, solo click al detalle.

### WhatsAppButton.tsx
- Posición fija: `bottom-6 right-6`.
- Z-Index: `50` (Siempre encima).

## 4. ZONAS EDITABLES (SEGURO PARA MODIFICAR)

- **Contenido del Google Sheet**: Precios, nombres, estados.
- **Imágenes en Drive**: Actualizar fotos.
- **Variables de Entorno**: Cambiar número de WhatsApp o URL del Sheet.

---
**ESTADO DEL SISTEMA: CONGELADO**
Cualquier cambio fuera de las "Zonas Editables" requiere revisión de arquitectura completa.
