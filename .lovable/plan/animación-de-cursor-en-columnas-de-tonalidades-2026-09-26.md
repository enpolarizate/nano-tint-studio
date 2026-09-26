# Animación de cursor en columnas de tonalidades

## Objetivo
Cuando el cursor pasa por encima de una columna del comparador de tonalidades (sección "Tonalidades y niveles de privacidad" en `/peliculas-arquitectonicas`), mostrar una animación de cursor personalizada que indique que la columna es clicable.

## Cambios (solo en `src/pages/PeliculasArquitectonicas.tsx`, función `Tints`)

1. **Cursor personalizado tipo lupa**: Al pasar el cursor sobre cualquier columna, aparece un círculo dorado con un ícono de lupa (lucide `Maximize2` o `Eye`) que sigue al puntero del mouse dentro de la tira del comparador.
   - Se implementa con un `onMouseMove`/`onMouseEnter`/`onMouseLeave` a nivel del contenedor de columnas que actualiza la posición (x/y) de un div flotante absoluto.
   - El círculo usa el dorado de la página (`var(--gold)`), con un pulso suave (`animate-pulse` o keyframe propio) y `pointer-events-none` para no bloquear el clic.
   - En móvil (sin hover) no se muestra; solo activa en dispositivos con cursor.

2. **Efecto de hover en la columna**: Al hover, la columna hace un ligero `scale` (1.02) y un brillo dorado en el borde superior, usando las clases `transition-transform duration-200 hover:scale-[1.02]` ya soportadas por Tailwind y la animación `.hover-scale` del proyecto.

3. **`cursor-pointer`** ya viene por defecto en el `Button`; se mantiene.

## Notas
- No se toca el popup ni los tonos de las columnas.
- Solo desktop con cursor; en touch queda igual que ahora.
- Build y typecheck deben seguir limpios.

## Implementación
- Editar únicamente la función `Tints` (líneas ~221-325) en `src/pages/PeliculasArquitectonicas.tsx`.
- Añadir estado `cursorPos` y `cursorActive`; un div flotante absoluto con el ícono dorado.
- Añadir clases de hover a cada `Button` de columna.
