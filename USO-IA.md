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

No se exige rechazar una sugerencia si todas fueron útiles, ni entregar conversaciones completas. No usar IA no reduce puntaje.
