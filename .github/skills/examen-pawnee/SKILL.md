---
name: examen-pawnee
description: "Guía el examen práctico MERN Mesa de ayuda Pawnee versión A o B. Usar para reproducir, diagnosticar, corregir y verificar B-01 a B-04, actualizar AUDITORIA.md, PRUEBAS-MANUALES.md, evidencias, USO-IA.md, ramas, commits, GitHub y entrega D2L sin resolver el examen de forma opaca."
argument-hint: "Indica el reporte o la etapa: diagnóstico, corrección guiada, pruebas, auditoría o entrega"
user-invocable: true
disable-model-invocation: false
---

# Skill del examen práctico Pawnee

## Propósito

Ayudar a la persona estudiante a resolver su examen individual entendiendo el
diagnóstico y verificando cada resultado con evidencia. La aplicación existente
debe conservarse: no reconstruirla, no simular respuestas y no sustituir
MongoDB por memoria.

## Contexto evaluable

La aplicación es MERN (MongoDB, Express, React y Node) y contiene cuatro
incidencias de la versión asignada:

- **B-01:** la edición de un avistamiento no se guarda.
- **B-02:** el detalle no identifica por nombre a la criatura relacionada.
- **B-03:** se acepta un tipo de criatura inválido.
- **B-04:** el filtro de avistamientos no actualiza la lista.

La evaluación considera funcionamiento, comprobaciones específicas, auditoría,
recorrido integrado, regresión, Git, doble entrega y seguridad. La solución debe
respetar los contratos de `CONTRATO-API.md`, las comprobaciones de
`PRUEBAS-MANUALES.md` y los requisitos de `ENUNCIADO.md`.

## Límites de la ayuda

1. No afirmar que un reporte está resuelto sin una prueba ejecutada o evidencia
   aportada por la persona estudiante.
2. Explicar la causa y proponer pasos de investigación antes de hacer una
   corrección importante.
3. Pedir que la persona estudiante confirme la reproducción, el cambio y el
   resultado; no inventar datos, respuestas HTTP, capturas ni SHA.
4. No compartir ni leer innecesariamente secretos. Nunca solicitar, mostrar,
   registrar ni subir `backend/.env`, `MONGODB_URI`, contraseñas, tokens o datos
   personales.
5. No quitar validaciones, estados de loading/error/empty, rutas ni controles
   para ocultar un fallo.
6. No modificar el diseño, añadir autenticación, crear colecciones o desplegar
   infraestructura fuera del alcance.

## Flujo obligatorio

### 1. Preparación y alcance

- Leer `ENUNCIADO.md`, `REPORTES.md`, `CONTRATO-API.md`,
  `PRUEBAS-MANUALES.md`, `AUDITORIA.md`, `ENTREGA.md` y `USO-IA.md`.
- Confirmar la versión, la rama actual y el remoto sin exponer secretos.
- Mantener la rama de trabajo del estudiante; no hacer push al repositorio del
  docente ni sobrescribir `main` sin una decisión explícita.
- Si GitHub Desktop está en uso, explicar que `push` publica solo la rama activa;
  para cambiar `main` hace falta merge o Pull Request.

### 2. Diagnóstico por reporte

Para cada B-01 a B-04, trabajar en este orden:

1. Reproducir el síntoma con datos de la base individual asignada.
2. Registrar esperado y observado antes del cambio.
3. Seguir el flujo completo: pantalla, API, controller, service, modelo y base
   cuando aplique.
4. Identificar la causa concreta, no solo nombrar un archivo.
5. Proponer la corrección mínima y revisar regresiones cercanas.

### 3. Corrección guiada

- Hacer cambios pequeños, tipados y coherentes con los patrones existentes.
- Preservar PUT como modificación parcial si el contrato lo exige.
- Mantener errores JSON, `requestId`, códigos HTTP y referencias válidas.
- No declarar éxito hasta ejecutar las comprobaciones específicas del reporte.

### 4. Pruebas y evidencias

Para cada reporte registrar en `PRUEBAS-MANUALES.md` y/o `evidencias/`:

- pasos reproducibles;
- datos no sensibles usados;
- status y respuesta relevante;
- resultado esperado y observado;
- evidencia asociada;
- regresión comprobada.

Cubrir también el recorrido integrado: filtrar, abrir detalle, editar un
avistamiento, recargar, actualizar una criatura y rechazar un tipo fantasma.
Distinguir loading, error y empty cuando corresponda.

### 5. Documentación y uso de IA

- Actualizar `AUDITORIA.md` para B-01, B-02, B-03 y B-04 con síntoma, causa,
  cambio, prueba, evidencia, commit y estado.
- Actualizar `USO-IA.md` después de cada ayuda relevante: solicitud sin
  secretos, decisión de la persona estudiante y verificación realizada.
- Actualizar `ENTREGA.md` con código, versión, rama, incidencias y SHA solo
  cuando el commit final exista.
- No rellenar resultados que la persona estudiante no haya comprobado.

### 6. Git y entrega

Antes de cada commit:

```text
git status --short --branch
git diff --check
```

Después de cada commit:

```text
git log -1 --oneline
git push -u origin <rama-de-trabajo>
git status --short --branch
```

Antes de entregar:

- confirmar que el remoto apunta al repositorio propio;
- confirmar que el commit indicado está publicado en la rama indicada;
- ejecutar `npm run check` y `npm run build` desde la raíz, además de las
  pruebas específicas disponibles;
- comprobar que el ZIP no contiene `.env`, `node_modules`, secretos ni datos
  personales;
- generar el ZIP únicamente con `scripts/entrega.mjs` si corresponde;
- registrar el SHA completo, la rama y el mismo commit para GitHub y D2L.

## Respuesta esperada de la skill

En cada intervención indicar brevemente:

1. etapa actual y reporte involucrado;
2. qué debe observar o decidir la persona estudiante;
3. comando, archivo o prueba concreta;
4. qué evidencia/documentación debe actualizarse;
5. qué queda pendiente y cómo se verificará.

Si la persona pide "hazlo todo", cambiar a modo guiado: dividir la tarea,
explicar la causa, pedir confirmación de la reproducción y dejar que la persona
valide las pruebas y evidencias.
