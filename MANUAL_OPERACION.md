# 📘 MANUAL DE OPERACIÓN URBANKICK (MODO HUMANO)

Este documento es tu única guía necesaria para operar la tienda día a día.

---

## 1. GESTIÓN DE PRODUCTOS (GOOGLE SHEETS)

Todo se controla desde tu hoja "UrbanKick Inventario".

### ➤ Agregar Nuevo Producto
1.  Sube las fotos a Google Drive (Carpeta "Catálogo Hombre" o "Dama").
2.  Copia el nombre exacto del archivo (ej: `nike-air-max.jpg`).
3.  Ve al Sheet y llena una nueva fila:
    *   **SKU:** Crea uno único (ej: `UK-H-050`).
    *   **Nombre:** Nombre comercial completo.
    *   **Precio:** Solo números (ej: `450000`).
    *   **Estado:** Selecciona `disponible`.
    *   **ImagenCover:** Pega el nombre del archivo de la foto principal.
4.  **IMPORTANTE:** Ve a `Archivo -> Compartir -> Publicar en la web` (solo si cambiaste la configuración, si no, se actualiza solo cada 5 min).

### ➤ Marcar Agotado
1.  Busca el producto en el Sheet.
2.  Cambia la columna **Estado** a `agotado`.
3.  Listo. En 60 segundos la web mostrará el badge "AGOTADO" y bloqueará el botón de WhatsApp.

### ➤ Cambiar Precios
1.  Edita la celda de precio.
2.  Listo.

---

## 2. GESTIÓN DE IMÁGENES (GOOGLE DRIVE)

### ➤ Reglas de Oro
*   **Nombres Simples:** Usa nombres fáciles como `jordan-1-chicago.jpg` en lugar de `IMG_20240505_WA0001.jpg`.
*   **Formato:** Siempre `.jpg` o `.png`.
*   **Permisos:** La carpeta debe estar compartida como "Cualquier persona con el enlace puede ver".

---

## ✅ CHECKLIST PRE-VENTAS (ANTES DE PUBLICAR)

No envíes tráfico si no has marcado todo esto:

### 1. Google Sheet
- [ ] ¿Todas las columnas tienen el encabezado correcto?
- [ ] ¿No hay filas vacías entre productos?
- [ ] ¿Los precios están en pesos colombianos (sin decimales)?
- [ ] ¿El Sheet está "Publicado en la web" como CSV?

### 2. Google Drive
- [ ] ¿Las carpetas "Catálogo Hombre" y "Dama" son públicas?
- [ ] ¿Los nombres de archivo en el Sheet coinciden EXACTAMENTE con los de Drive? (Ojo con mayúsculas/minúsculas).

### 3. Vercel (Configuración)
- [ ] ¿La variable `NEXT_PUBLIC_WHATSAPP_E164` tiene tu número real (57...)?
- [ ] ¿La variable `NEXT_PUBLIC_SHEET_CSV_URL` es la correcta?

### 4. Prueba Final (Usuario)
- [ ] Entra a la web desde tu celular (incógnito).
- [ ] Busca un producto.
- [ ] Dale click a "Consultar Disponibilidad".
- [ ] ¿Se abre tu WhatsApp con el mensaje correcto?

---

## 🆘 SOLUCIÓN DE PROBLEMAS RÁPIDA

*   **"No salen las fotos":** Revisa que el nombre en el Sheet sea idéntico al de Drive.
*   **"No se actualiza el precio":** Espera 60 segundos y refresca la página.
*   **"Error 404":** Revisa Vercel -> Deployments para ver si hubo un error de construcción.

**ESTADO DEL SISTEMA: LISTO PARA VENTAS 🚀**
