# 🎛️ GUÍA DE CONFIGURACIÓN: GOOGLE SHEET COMO PANEL DE CONTROL

Para convertir tu hoja de cálculo en un verdadero **Panel de Control Humano**, sigue estos pasos visuales en Google Sheets. Esto hará que gestionar tu tienda sea rápido y a prueba de errores.

## 1. ESTRUCTURA VISUAL (FORMATO)

Aplica estos estilos a tu hoja "UrbanKick Inventario":

### Encabezados (Fila 1)
- **Fuente:** Roboto, Negrita, Tamaño 11
- **Color de Fondo:** `#434343` (Gris Oscuro)
- **Color de Texto:** Blanco
- **Alineación:** Centro
- **Acción:** Selecciona la Fila 1 -> Ver -> Inmovilizar -> 1 fila

### Columnas (Anchos Recomendados)
- **A (SKU):** 100px (Fondo gris claro `#f3f3f3` para indicar "no editar")
- **B (Nombre):** 250px
- **C (Categoria):** 100px
- **D (Precio):** 100px (Formato Moneda sin decimales)
- **E (Tallas):** 150px
- **F (Estado):** 100px
- **G (ImagenCover):** 200px (Recortar texto)
- **H (ImagenesGaleria):** 200px (Recortar texto)

## 2. VALIDACIONES DE DATOS (CRÍTICO)

Para evitar errores de dedo, configura estas validaciones:

### Columna C (Categoria)
1. Selecciona toda la columna C (menos el encabezado).
2. Datos -> Validación de datos.
3. Criterios: Lista de elementos.
4. Escribe: `Hombre,Dama,Unisex`
5. **Resultado:** Ahora tendrás un menú desplegable.

### Columna F (Estado)
1. Selecciona toda la columna F.
2. Datos -> Validación de datos.
3. Criterios: Lista de elementos.
4. Escribe: `disponible,agotado`
5. **Resultado:** Menú desplegable para control rápido de stock.

### Columna D (Precio)
1. Selecciona toda la columna D.
2. Formato -> Número -> Moneda (redondeado).
3. **Nota:** Al exportar a CSV, asegúrate de que no tenga símbolos extraños, aunque el sistema limpia caracteres no numéricos automáticamente.

## 3. FORMATO CONDICIONAL (SEMAFORIZACIÓN)

Ayuda visual para identificar estados rápidamente:

### Estado "agotado"
1. Selecciona columna F.
2. Formato -> Formato condicional.
3. Regla: "El texto es exactamente" -> `agotado`
4. Estilo: Fondo Rojo Claro, Texto Rojo Oscuro.

### Estado "disponible"
1. Regla: "El texto es exactamente" -> `disponible`
2. Estilo: Fondo Verde Claro, Texto Verde Oscuro.

## 4. ORDEN Y FILTROS

1. Selecciona toda la hoja.
2. Datos -> Crear filtro.
3. **Uso:** Ahora puedes ordenar por "Estado" para ver qué falta, o por "Categoría" para revisar inventario.

---

## ⚠️ REGLA DE ORO PARA EXPORTAR

Cuando termines de editar:
1. **Archivo -> Compartir -> Publicar en la web**
2. Formato: **Valores separados por comas (.csv)**
3. **NO** uses el link de "Compartir" normal. Usa el link de "Publicar en la web".
