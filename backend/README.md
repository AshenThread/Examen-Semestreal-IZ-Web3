# Backend Pawnee

API REST de la aplicación Pawnee. El backend usa Express, TypeScript,
Mongoose y MongoDB Atlas.

## Requisitos

- Node.js 20.19 o superior
- npm
- MongoDB Atlas asignado
- Archivo backend/.env con una URI privada

## Configuración

Desde la raíz del repositorio:

```bash
npm install --prefix backend
cp backend/.env.example backend/.env
```

Completa backend/.env con la URI y el nombre de base asignados. No publiques
ese archivo ni copies la URI en el frontend.

## Comandos

Desde la carpeta backend:

```bash
npm run diagnostico
npm run dev
```

Otros comandos disponibles:

```bash
npm run check
npm run build
npm run validar-modelos
npm start
```

El servidor escucha en http://127.0.0.1:3000.

## Comprobación rápida

Con el backend encendido:

```bash
curl http://127.0.0.1:3000/api/salud
curl http://127.0.0.1:3000/api/criaturas
curl http://127.0.0.1:3000/api/avistamientos
```

La respuesta de salud debe ser 200 con estado ok cuando MongoDB esté
conectado. La API no siembra ni borra datos automáticamente al iniciar.

## Rutas principales

- GET, POST /api/criaturas
- GET, PUT, DELETE /api/criaturas/:id
- GET /api/criaturas/:id/avistamientos
- GET, POST /api/avistamientos
- GET, PUT, DELETE /api/avistamientos/:id
- GET /api/avistamientos?criaturaId=:id
- GET /api/salud

Los errores se devuelven como JSON con error y requestId. Los tipos de
criatura permitidos son mitica, elemental, mecanica y espectral.

## Arquitectura

- src/modelos: esquemas Mongoose
- src/services: reglas de negocio y consultas
- src/controllers: traducción entre HTTP y servicios
- src/routes: rutas Express
- src/middlewares: requestId, logging y errores
- src/config y src/conexionDB.ts: configuración y conexión
- fixtures: datos ficticios de referencia, no se cargan automáticamente

