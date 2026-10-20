# Contrato API
Cuerpos JSON con Content-Type: application/json. Las formas descritas son las esperadas, aunque las incidencias iniciales pueden incumplirlas.

| Método | Ruta | Éxito |
|---|---|---|
| GET | /api/criaturas?tipo=mitica | 200 { criaturas, total, requestId } |
| GET | /api/criaturas/:id | 200 { criatura, requestId } |
| POST | /api/criaturas | 201 { criatura, requestId } |
| PUT | /api/criaturas/:id | 200 { criatura, requestId } |
| DELETE | /api/criaturas/:id | 204 sin cuerpo; 409 si tiene registros relacionados |
| GET | /api/criaturas/:id/avistamientos | 200 { avistamientos, total, requestId } |
| GET | /api/avistamientos?criaturaId=... | 200 { avistamientos, total, requestId } |
| GET | /api/avistamientos/:id | 200 { avistamiento, requestId } |
| POST | /api/avistamientos | 201 { avistamiento, requestId } |
| PUT | /api/avistamientos/:id | 200 { avistamiento, requestId } |
| DELETE | /api/avistamientos/:id | 204 sin cuerpo |
| GET | /api/salud | 200 ok / 503 sin conexión |

Criatura: nombre, tipo y nivelPeligro obligatorios; tipo en mitica/elemental/mecanica/espectral; peligro 1–10. habilidades string[] opcional; estado por defecto activa.
Avistamiento: criatura (id de una existente), testigo, ubicacion y fecha obligatorios; descripcion opcional.
Lecturas relacionadas deben permitir mostrar el nombre de criatura. Las escrituras de avistamiento pueden devolver el id crudo; un GET recupera la forma para visualizar.
PUT se conserva como modificación parcial por compatibilidad de las prácticas anteriores; no cambiar a PATCH por requisito del examen.
Errores JSON { error, requestId }: 400 entrada inválida, 404 no encontrado, 409 conflicto de borrado, 500 inesperado. No devolver secretos ni stacks al cliente.
