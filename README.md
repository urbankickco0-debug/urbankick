# UrbanKick - Tienda Premium de Sneakers

Web premium para UrbanKick, tienda de sneakers en Colombia. Diseño minimalista tipo Nike/boutique underground con gestión de inventario mediante Google Sheets.

## 🚀 Características

- ✅ Diseño premium underground minimalista (carbón/negro/blanco)
- ✅ Catálogo dinámico con filtros por categoría, estado y búsqueda
- ✅ Integración con WhatsApp para consultas y ventas
- ✅ Gestión de inventario mediante Google Sheets (CMS sin código)
- ✅ ISR (Incremental Static Regeneration) cada 60 segundos
- ✅ SEO optimizado con OpenGraph
- ✅ Responsive design (mobile-first)
- ✅ Botón flotante de WhatsApp
- ✅ Lazy loading de imágenes
- ✅ TypeScript + Next.js 16 + Tailwind CSS

## 📋 Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gestión de datos:** Google Sheets (CSV público)
- **Imágenes:** Google Drive
- **Deploy:** Vercel
- **Control de versiones:** Git + GitHub

## 🛠️ Configuración Inicial

### 1. Clonar el repositorio

\`\`\`bash
git clone https://github.com/urbankickco0-debug/urbankick.git
cd urbankick
\`\`\`

### 2. Instalar dependencias

\`\`\`bash
pnpm install
\`\`\`

### 3. Configurar Google Sheet (CMS)

#### Paso 1: Crear el Google Sheet

1. Abre Google Sheets: https://sheets.google.com
2. Crea una nueva hoja de cálculo
3. Nómbrala "UrbanKick Inventario" (o el nombre que prefieras)

#### Paso 2: Agregar los encabezados

En la primera fila, agrega estos encabezados **exactamente como se muestran**:

| SKU | Nombre | Categoria | Precio | Tallas | Estado | ImagenCover | ImagenesGaleria |
|-----|--------|-----------|--------|--------|--------|-------------|-----------------|

#### Paso 3: Agregar productos de ejemplo

\`\`\`
SKU,Nombre,Categoria,Precio,Tallas,Estado,ImagenCover,ImagenesGaleria
UK-H-001,Nike Air Max 90 Triple Black,Hombre,450000,"38,39,40,41,42",disponible,038652db-3716-47e0-b9d2-357b46fd9e65.JPG,"0622e4d7-c7da-4aaa-849c-ddc1d1325b42.JPG,0785a55a-7de4-4f87-83fc-7049c0405565.jpg"
UK-H-002,Adidas Yeezy Boost 350,Hombre,850000,"39,40,41,42,43",disponible,0876d9f0-b55c-4a3d-9945-a52018b300cb.jpg,0b2c719d-ef2a-4a67-891d-ff1709e6bf36.jpg
UK-D-001,Nike Air Force 1 White,Dama,380000,"35,36,37,38,39",agotado,PHOTO-2025-12-22-12-12-18.jpg,"PHOTO-2025-12-22-12-12-19.jpg,PHOTO-2025-12-22-12-12-17.jpg"
\`\`\`

#### Paso 4: Publicar como CSV

1. En el menú: **Archivo → Compartir → Publicar en la web**
2. En la primera lista desplegable, selecciona: **Hoja 1** (o la hoja que uses)
3. En la segunda lista desplegable, selecciona: **Valores separados por comas (.csv)**
4. Haz clic en **Publicar**
5. Copia la URL generada (algo como: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ.../pub?output=csv`)

### 4. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

\`\`\`bash
# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_E164=573216841147

# Google Sheet CSV URL (reemplazar con tu URL real)
NEXT_PUBLIC_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/2PACX-1vQ.../pub?output=csv

# Google Drive Catalog Folders
NEXT_PUBLIC_DRIVE_HOMBRE_FOLDER=Catálogo Hombre 
NEXT_PUBLIC_DRIVE_DAMA_FOLDER=Catálogo Dama
\`\`\`

### 5. Ejecutar en desarrollo

\`\`\`bash
pnpm dev
\`\`\`

Abre http://localhost:3000 en tu navegador.

## 🚢 Despliegue en Vercel

### Opción 1: Deploy desde el Dashboard de Vercel (Recomendado)

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New Project"**
4. Importa el repositorio: `urbankickco0-debug/urbankick`
5. Configura las variables de entorno:
   - `NEXT_PUBLIC_WHATSAPP_E164` = `573216841147`
   - `NEXT_PUBLIC_SHEET_CSV_URL` = Tu URL del Google Sheet CSV
   - `NEXT_PUBLIC_DRIVE_HOMBRE_FOLDER` = `Catálogo Hombre `
   - `NEXT_PUBLIC_DRIVE_DAMA_FOLDER` = `Catálogo Dama`
6. Haz clic en **"Deploy"**
7. Espera 2-3 minutos y tu web estará online

### Opción 2: Deploy desde CLI

\`\`\`bash
# Instalar Vercel CLI (si no lo tienes)
pnpm add -g vercel

# Iniciar sesión
vercel login

# Desplegar a producción
vercel --prod
\`\`\`

## 📝 Gestión del Inventario

### Agregar nueva referencia (60 segundos)

1. Abre tu Google Sheet
2. Agrega una nueva fila con los datos del producto:
   - **SKU:** Identificador único (ej: `UK-H-010`)
   - **Nombre:** Nombre del modelo (ej: `Jordan 1 Retro High OG`)
   - **Categoria:** `Hombre` o `Dama`
   - **Precio:** Precio en COP sin puntos ni comas (ej: `680000`)
   - **Tallas:** Separadas por comas sin espacios (ej: `38,39,40,41,42`)
   - **Estado:** `disponible` o `agotado`
   - **ImagenCover:** Nombre del archivo de imagen principal en Drive
   - **ImagenesGaleria:** Nombres de archivos adicionales separados por comas
3. Guarda (Ctrl+S o Cmd+S)
4. La web se actualizará automáticamente en máximo 60 segundos

### Marcar producto como agotado (10 segundos)

1. Abre tu Google Sheet
2. Busca la fila del producto
3. Cambia la columna **Estado** de `disponible` a `agotado`
4. Guarda
5. La web mostrará el badge "Agotado" y deshabilitará el botón de WhatsApp

### Actualizar precio o tallas

1. Abre tu Google Sheet
2. Edita las celdas correspondientes
3. Guarda
4. Los cambios se reflejarán en máximo 60 segundos

## 🖼️ Gestión de Imágenes (Google Drive)

### Estructura actual

Las imágenes están en dos carpetas compartidas de Google Drive:
- **Catálogo Hombre**: 170 imágenes
- **Catálogo Dama**: 140 imágenes

### Importante sobre las imágenes

Por limitaciones de acceso público a Google Drive, actualmente la web usa **imágenes placeholder** (picsum.photos). Para usar tus imágenes reales de Drive, tienes 3 opciones:

#### Opción 1: Usar URLs públicas de Drive (Recomendado)

1. Para cada imagen en Drive, haz clic derecho → "Obtener enlace"
2. Cambia el permiso a "Cualquier persona con el enlace"
3. Copia el ID del archivo (la parte entre `/d/` y `/view` en la URL)
4. Usa este formato en el Sheet: `https://drive.google.com/uc?export=view&id=FILE_ID`

#### Opción 2: Migrar a un CDN

1. Descarga todas las imágenes de Drive
2. Súbelas a un servicio como:
   - Cloudinary (gratis hasta 25GB)
   - Vercel Blob Storage
   - AWS S3
3. Actualiza las URLs en el Google Sheet

#### Opción 3: Implementar proxy de imágenes

Crear un endpoint API en Next.js que sirva las imágenes de Drive con autenticación.

## 📱 Funcionalidad de WhatsApp

### Botón flotante

Siempre visible en la esquina inferior derecha. Al hacer clic, abre WhatsApp con el mensaje:
> "Hola UrbanKick, me gustaría consultar sobre sus productos disponibles."

### Botón en página de producto

En cada producto disponible, el botón "Consultar Disponibilidad" abre WhatsApp con:
> "Hola UrbanKick, me interesa: [Nombre del Modelo]. Talla: [Talla seleccionada]. ¿Disponibilidad y tallas?"

### Cambiar número de WhatsApp

Edita la variable de entorno `NEXT_PUBLIC_WHATSAPP_E164` en Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Edita `NEXT_PUBLIC_WHATSAPP_E164`
4. Usa formato E.164: `57` + número sin espacios (ej: `573216841147`)
5. Redeploy para aplicar cambios

## 🎨 Personalización del Diseño

### Colores

Los colores están definidos en `tailwind.config.ts`:

\`\`\`typescript
colors: {
  carbon: {
    900: '#0a0a0a',  // Fondo principal
    800: '#1a1a1a',  // Bordes
    700: '#2a2a2a',  // Elementos secundarios
    // ...
  }
}
\`\`\`

### Tipografía

La web usa **Geist Sans** (fuente de Vercel) para un look moderno y profesional.

### Animaciones

Las animaciones están en `app/globals.css`:
- `fadeIn`: Aparición suave
- `slideUp`: Deslizamiento desde abajo

## 📊 Estructura del Proyecto

\`\`\`
urbankick/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts          # API endpoint para productos
│   ├── catalogo/
│   │   └── page.tsx              # Página de catálogo con filtros
│   ├── producto/
│   │   └── [sku]/
│   │       └── page.tsx          # Página de detalle de producto
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página de inicio (home)
├── components/
│   ├── Footer.tsx                # Footer con información
│   ├── Header.tsx                # Navbar con navegación
│   ├── ProductCard.tsx           # Tarjeta de producto
│   └── WhatsAppButton.tsx        # Botón flotante de WhatsApp
├── lib/
│   ├── images.ts                 # Utilidades para imágenes
│   ├── products.ts               # Lógica de carga de productos
│   └── whatsapp.ts               # Generación de links de WhatsApp
├── types/
│   └── product.ts                # Tipos TypeScript
├── .env.local                    # Variables de entorno (local)
├── .env.example                  # Ejemplo de variables de entorno
├── next.config.ts                # Configuración de Next.js
├── tailwind.config.ts            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── package.json                  # Dependencias del proyecto
\`\`\`

## 🔧 Comandos Útiles

\`\`\`bash
# Desarrollo
pnpm dev              # Iniciar servidor de desarrollo

# Build
pnpm build            # Compilar para producción
pnpm start            # Iniciar servidor de producción

# Linting
pnpm lint             # Ejecutar ESLint

# Git
git add .             # Agregar cambios
git commit -m "..."   # Hacer commit
git push              # Subir a GitHub
\`\`\`

## 🐛 Solución de Problemas

### Las imágenes no se muestran

- Verifica que las URLs de las imágenes sean públicas
- Revisa que los nombres de archivo en el Sheet coincidan con los de Drive
- Actualmente se usan placeholders; implementa una de las opciones de gestión de imágenes

### Los productos no se actualizan

- Verifica que la URL del CSV sea correcta y pública
- Espera hasta 60 segundos (ISR revalidation time)
- Revisa la consola del navegador para errores

### Error al desplegar en Vercel

- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que el repositorio esté actualizado en GitHub
- Revisa los logs de build en el dashboard de Vercel

## 📞 Soporte

Para consultas sobre el código o la configuración, revisa:
- La documentación de Next.js: https://nextjs.org/docs
- La documentación de Vercel: https://vercel.com/docs
- La documentación de Tailwind CSS: https://tailwindcss.com/docs

## 📄 Licencia

Este proyecto fue creado específicamente para UrbanKick.

---

**Desarrollado con ❤️ para UrbanKick**
