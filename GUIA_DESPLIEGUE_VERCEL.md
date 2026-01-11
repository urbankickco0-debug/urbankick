# 🚀 Guía Rápida de Despliegue en Vercel

## Paso 1: Acceder a Vercel

1. Ve a https://vercel.com
2. Haz clic en **"Sign Up"** o **"Log In"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tu cuenta de GitHub

## Paso 2: Importar el Proyecto

1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca el repositorio: `urbankick`
3. Haz clic en **"Import"**

## Paso 3: Configurar Variables de Entorno

Antes de hacer deploy, configura estas variables de entorno:

### Variables Obligatorias:

1. **NEXT_PUBLIC_WHATSAPP_E164**
   - Valor: `573216841147`
   - Descripción: Número de WhatsApp en formato E.164

2. **NEXT_PUBLIC_SHEET_CSV_URL**
   - Valor: La URL del CSV de tu Google Sheet
   - Ejemplo: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQxxx.../pub?output=csv`
   - Descripción: URL pública del inventario en Google Sheets

3. **NEXT_PUBLIC_DRIVE_HOMBRE_FOLDER**
   - Valor: `Catálogo Hombre `
   - Descripción: Nombre de la carpeta de Drive con imágenes de hombre

4. **NEXT_PUBLIC_DRIVE_DAMA_FOLDER**
   - Valor: `Catálogo Dama`
   - Descripción: Nombre de la carpeta de Drive con imágenes de dama

### Cómo agregar las variables:

1. En la pantalla de configuración del proyecto, busca la sección **"Environment Variables"**
2. Para cada variable:
   - Escribe el **Name** (nombre de la variable)
   - Escribe el **Value** (valor de la variable)
   - Haz clic en **"Add"**
3. Asegúrate de que todas las 4 variables estén agregadas

## Paso 4: Desplegar

1. Verifica que todas las variables de entorno estén configuradas
2. Haz clic en **"Deploy"**
3. Espera 2-3 minutos mientras Vercel:
   - Clona el repositorio
   - Instala las dependencias
   - Compila el proyecto
   - Despliega a producción

## Paso 5: Obtener la URL

1. Una vez completado el deploy, verás un mensaje de éxito
2. Haz clic en **"Visit"** o copia la URL que aparece
3. Tu web estará disponible en: `https://urbankick-xxx.vercel.app`

## Paso 6: Configurar Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: `urbankick.com`):

1. En el dashboard de Vercel, ve a tu proyecto
2. Haz clic en **"Settings"** → **"Domains"**
3. Haz clic en **"Add"**
4. Ingresa tu dominio (ej: `urbankick.com`)
5. Sigue las instrucciones para configurar los DNS
6. Espera 24-48 horas para que los cambios de DNS se propaguen

## Actualizaciones Automáticas

Cada vez que hagas un `git push` al repositorio de GitHub, Vercel automáticamente:
1. Detectará los cambios
2. Compilará el proyecto
3. Desplegará la nueva versión
4. Actualizará la URL en vivo

## URLs Importantes

- **Dashboard de Vercel:** https://vercel.com/dashboard
- **Repositorio GitHub:** https://github.com/urbankickco0-debug/urbankick
- **Documentación Vercel:** https://vercel.com/docs

## Solución de Problemas

### Error: "Build failed"

1. Ve a **"Deployments"** en tu proyecto
2. Haz clic en el deployment fallido
3. Revisa los logs de error
4. Verifica que todas las variables de entorno estén configuradas correctamente

### Error: "No se muestran los productos"

1. Verifica que `NEXT_PUBLIC_SHEET_CSV_URL` esté correctamente configurada
2. Asegúrate de que el Google Sheet esté publicado como CSV
3. Prueba accediendo directamente a la URL del CSV en tu navegador

### Error: "Las imágenes no cargan"

- Esto es normal. Las imágenes usan placeholders por defecto
- Sigue las instrucciones del README para configurar las imágenes reales de Drive

## Siguiente Paso

Una vez desplegada la web, configura tu Google Sheet siguiendo la guía del README.md
