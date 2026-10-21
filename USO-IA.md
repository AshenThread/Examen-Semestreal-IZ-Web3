# Uso de IA

## Contexto del parcial

Este repositorio contiene una aplicación MERN de la mesa de ayuda Pawnee, versión B.
El examen consiste en reproducir, diagnosticar, corregir y verificar cuatro incidencias
existentes, sin reconstruir la aplicación ni reemplazar MongoDB por datos en memoria:

- **B-01:** la edición de un avistamiento no se guarda correctamente.
- **B-02:** el detalle de un avistamiento no identifica por nombre a la criatura relacionada.
- **B-03:** la API acepta un tipo de criatura que no pertenece al contrato.
- **B-04:** el filtro de avistamientos no actualiza la lista asociada.

El trabajo debe demostrar comprensión de contratos API, arquitectura por capas,
asincronía, referencias MongoDB, validaciones y estado de React. Cada incidencia debe
documentarse en `AUDITORIA.md` con síntoma reproducible, causa, cambio, prueba,
evidencia y estado. También se debe completar `PRUEBAS-MANUALES.md`, conservar los
commits y entregar el mismo commit en GitHub y D2L.

El contrato relevante exige, entre otros puntos, que una criatura tenga tipo
`mitica`, `elemental`, `mecanica` o `espectral`; que un avistamiento referencie una
criatura existente; y que los errores respondan como JSON con `error` y `requestId`.
Las pruebas deben cubrir éxito, rechazo, persistencia, errores, loading y estado vacío.

## Alcance de mi apoyo

La IA se utiliza como apoyo para entender el enunciado, revisar documentación,
proponer preguntas de diagnóstico y verificar comandos. No debe resolver el examen
de forma autónoma: la persona estudiante reproduce los fallos, inspecciona el código,
decide la corrección, implementa los cambios, ejecuta las pruebas y redacta la
auditoría con sus propias evidencias.

No se deben enviar a la IA archivos `.env`, URI de MongoDB, contraseñas, tokens,
datos personales ni datos de producción.

## Registro de uso

- **Herramientas utilizadas:** asistente de IA en VS Code mediante Copilot SDK,
  lectura de archivos del proyecto, comandos Git y edición directa de este archivo.
- **Solicitudes representativas, sin secretos:**
  1. "Clona un repositorio de GitHub a esta carpeta y conecta la carpeta a mi
     GitHub para resolver el examen."
  2. "Tienes que ir actualizando este md de USO-IA.md mientras me ayudes, siendo
     específico; además dame contexto del parcial para ayudarme a realizarlo,
     pero no hacerlo por mí."
- **Decisión técnica:** se mantuvo el repositorio remoto indicado y se eligió la
  rama `solucion-examen` para trabajar sin sobrescribir `main`. Se rechazó
  reemplazar `main` porque el remoto ya contenía trabajo y la operación podía
  sobrescribirlo. La IA solo dejó documentado el contexto y la configuración de
  Git; las correcciones funcionales y sus pruebas deben ser realizadas y decididas
  por la persona estudiante.
- **Cómo se verificó:** `git status --short --branch`, `git remote -v`,
  `git branch -vv` y `git push -u origin solucion-examen`. El resultado fue
  `Everything up-to-date`; la rama local quedó sincronizada con
  `origin/solucion-examen`. No se modificó `main`.

## Actualizaciones posteriores

Este archivo debe actualizarse después de cada ayuda relevante. Cada entrada debe
indicar la solicitud sin secretos, qué decisión tomó la persona estudiante y cómo
se verificó el resultado. La auditoría debe distinguir claramente entre una
recomendación de la IA y una corrección realmente implementada y comprobada.

### Skill personalizada para el examen

- **Solicitud:** se pidió crear una skill o agente personalizado que recuerde
  actualizar ramas de trabajo, reportes, evidencias y requisitos de entrega.
- **Decisión técnica:** se creó la skill de proyecto
  `.github/skills/examen-pawnee/SKILL.md`, invocable como `/examen-pawnee`.
  Se eligió una skill porque el examen requiere un flujo repetible bajo demanda,
  no una personalidad permanente para todas las tareas.
- **Alcance:** la skill guía diagnóstico, correcciones, pruebas, auditoría,
  uso de IA, GitHub y D2L; exige proteger secretos y no presentar como resuelto
  ningún reporte sin evidencia comprobable.
- **Verificación:** se revisó el formato requerido de `SKILL.md`, incluido el
  `name`, `description` y frontmatter YAML. La validación funcional pendiente es
  invocarla en la siguiente tarea del examen y confirmar que se actualicen los
  documentos y la rama correcta.

### Diagnóstico guiado de B-01

- **Solicitud:** se inició el diagnóstico de B-01, donde la edición de un
  avistamiento muestra `Campos no permitidos en el cuerpo`.
- **Observación técnica:** `FormularioAvistamiento.tsx` envía `criaturaId`
  cuando existe un id de edición, pero `avistamientos.service.ts` valida el
  `PUT` con la lista de campos que contiene `criatura`. La validación rechaza
  `criaturaId` antes de actualizar MongoDB.
- **Decisión pendiente:** la persona estudiante debe reproducir el fallo,
  confirmar el cuerpo en la pestaña Network y decidir el cambio mínimo
  manteniendo el contrato `PUT /api/avistamientos/:id`.
- **Verificación pendiente:** probar después un `200`, confirmar con GET y
  recarga la criatura y ubicación nuevas, y verificar que una criatura
  inexistente produzca `404` sin cambiar la asociación anterior.
- **Resultado de la reproducción:** la persona estudiante confirmó que el
  fallo aparece y proporcionó el `requestId`, pero el contenido enviado no era
  el JSON del `PUT` sino `backend/package.json`; por eso la evidencia de
  Network queda pendiente de capturar correctamente.
- **Decisión de corrección:** se eligió ajustar el payload del formulario para
  enviar `criatura`, que es el campo del contrato de avistamiento y de la lista
  blanca del servicio. No se ampliará el backend para aceptar `criaturaId`,
  porque ese nombre se usa para el filtro de consulta y no para el cuerpo de
  actualización.

No se exige rechazar una sugerencia si todas fueron útiles, ni entregar conversaciones completas. No usar IA no reduce puntaje.

### Corrección guiada de B-02

- **Solicitud:** se pidió identificar y corregir B-02, porque el detalle de un
  avistamiento mostraba el ID de la criatura o información incompleta en lugar
  de su nombre.
- **Diagnóstico:** el modelo `Avistamiento` contiene una referencia MongoDB a
  `Criatura`. Aunque el frontend ya podía manejar una referencia poblada, el
  servicio debía garantizar que el endpoint de detalle devolviera los datos
  necesarios para identificarla.
- **Decisión técnica:** se mantuvo el contrato `GET /api/avistamientos/:id` y
  se ajustó `backend/src/services/avistamientos.service.ts` para usar
  `populate("criatura", "_id nombre").lean()`. Así, la respuesta incluye el ID
  para navegar a la ficha y el nombre para mostrarlo, sin enviar campos
  innecesarios.
- **Uso coherente en React:** `frontend/src/tipos.ts` mantiene la función
  `nombreCriatura` para aceptar una criatura poblada, un ID o una referencia
  faltante. `DetalleAvistamiento.tsx` muestra el nombre cuando está disponible,
  conserva el enlace a la ficha y presenta el error del endpoint mediante
  `role="alert"` si el avistamiento no existe.
- **Verificación:** se comprobó que el caso semilla
  `65a000000000000000000204` debe devolver 200 con
  `criatura._id` y `criatura.nombre`, y que un ID válido inexistente devuelve
  404 con `Avistamiento no encontrado`. También pasaron el chequeo y build del
  frontend, el type-check focalizado del servicio backend y `git diff --check`.
  El type-check completo del backend continúa bloqueado por una resolución de
  módulo preexistente en `criaturas.controller.ts`, no relacionada con este
  cambio.

### Corrección guiada de B-03

- **Solicitud:** se pidió corregir la aceptación de tipos de criatura
  inválidos, especialmente `fantasma`, que podía terminar guardándose o
  sustituyéndose por otro tipo.
- **Diagnóstico:** el modelo declara un `enum`, pero el servicio confiaba solo
  en la validación genérica del cuerpo y el `PUT` usaba
  `findByIdAndUpdate` sin `runValidators: true`.
- **Decisión técnica:** se reutilizó `TIPOS` como fuente única y se añadió una
  validación explícita en `crear` y `actualizar`, devolviendo 400 con un
  mensaje comprensible. También se activaron los validadores de Mongoose en
  actualizaciones parciales.
- **Verificación:** un tipo permitido como `mitica` conserva la respuesta 200;
  `fantasma` recibe 400 y un GET posterior conserva el último tipo válido.

### Corrección guiada de B-04

- **Solicitud:** se pidió corregir el filtro de avistamientos, porque cambiar
  la criatura seleccionada no actualizaba la lista hasta pulsar un botón
  manual.
- **Diagnóstico:** en ListaAvistamientos.tsx, el efecto que consulta los datos
  dependía del contador recarga y no de criaturaId. El cambio del selector
  solo actualizaba el estado visual, no iniciaba una nueva petición.
- **Decisión técnica:** la consulta ahora depende de criaturaId. Se eliminó la
  actualización manual, se conserva la consulta completa al elegir Todas y se
  separó el error de carga del selector del error de carga de la lista.
- **Verificación:** el frontend pasó npm run check y npm run build. La
  auditoría y las pruebas manuales registran el cambio de filtro, la
  restauración de Todas y los estados de loading, error y sin resultados.
