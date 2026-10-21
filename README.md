# Examen práctico Pawnee · Versión B

Paquete para repositorio público docente y entrega individual pública + D2L. No contiene soluciones.


## Preparación técnica (antes del reloj)
Requisitos: Node 20.19+ o 22, npm, Git, navegador y base Atlas asignada. No crear clústeres en el examen.
Desde la raíz:
```bash
npm install --prefix backend
npm install --prefix frontend
```
Las versiones directas están fijadas. La primera instalación genera package-lock.json: incluirlo en Git. Si recibes locks docentes pilotados, usa npm ci en vez de npm install. La instalación y resolución de dependencias se verifica antes de los 80 min.
Copia backend/.env.example a backend/.env (cp en Git Bash/macOS/Linux o Copy-Item en PowerShell). Pega la URI privada que recibas y tu base; el ejemplo parcial_e017 no es una asignación real. Nunca poner MONGODB_URI en frontend.

## Dos terminales
Desde backend: npm run diagnostico y npm run dev.
Desde frontend: npm run dev.
Abrir http://127.0.0.1:5173 . El proxy de Vite reenvía /api al backend 127.0.0.1:3000. No modificar CORS para este circuito.
Desde la raíz: npm run check y npm run build.
Para API compilada: desde backend npm start, con el puerto libre. frontend/npm run preview no proporciona el proxy de examen: usar dev.

## Datos y seguridad
La semilla ficticia contiene 3 criaturas de tipos distintos y 4 avistamientos. Los IDs están en backend/fixtures/base.json; se repiten solo en bases independientes. La API no borra ni siembra al arrancar.
No correr seed ni restaurar datos por tu cuenta; ante necesidad, solicitar al docente. El script seed solo inserta en dos colecciones vacías con confirmación explícita.
Eliminar una criatura con avistamientos devuelve 409; borrar primero sus avistamientos. Esta política ya existe y no es una incidencia adicional.
No publicar la API a internet: la práctica no implementa autenticación HTTP.

## Estructura
- backend/src/config/env.ts: entorno; conexionDB.ts: conexión.
- modelos/: esquemas; services/: consultas y negocio; controllers/: HTTP; routes/: endpoints.
- middlewares/: UUID, logging, errores; app.ts ensambla; index.ts conecta y escucha.
- frontend/src/api/: servicios HTTP; paginas/: listado/detalle/formulario; components/: feedback.
- AUDITORIA.md y evidencias/: diagnóstico y pruebas.
- scripts/entrega.mjs: ZIP versionado y manifiesto para D2L; no publica ni hace commits.

No hay CSS que rediseñar. Lee ENUNCIADO.md, REPORTES.md y PRUEBAS-MANUALES.md al iniciar. Cada reporte puede investigarse por separado con los datos iniciales.

## Estado de esta entrega

Esta rama documenta y verifica las cuatro incidencias:

- B-01: edición de avistamientos.
- B-02: nombre de la criatura en el detalle del avistamiento.
- B-03: rechazo de tipos de criatura inválidos.
- B-04: actualización automática del filtro de avistamientos.

El README específico del backend está en backend/README.md.

## Guía visual de trabajo y entrega

```text
┌──────────────────────────────┐
│ 1. Revisar cambios            │
│ git status / git diff         │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 2. Validar código             │
│ npm run check                 │
│ npm run build                 │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 3. Probar los 4 reportes      │
│ AUDITORIA.md                  │
│ PRUEBAS-MANUALES.md           │
│ evidencias/                   │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 4. Documentar uso de IA      │
│ USO-IA.md                     │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 5. Commit y push              │
│ git add / commit / push       │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 6. Árbol limpio               │
│ git status                    │
│ debe quedar sin cambios       │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 7. Crear ZIP del mismo HEAD  │
│ node scripts/entrega.mjs     │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ 8. Subir a D2L                │
│ ZIP + URL + rama + SHA        │
└──────────────────────────────┘
```

Para el procedimiento completo, consulta ENTREGA-D2L-GITHUB.md.
