# Auditoría · Versión B
Código: 330423
Repositorio público propio: https://github.com/AshenThread/Examen-Semestreal-IZ-Web3.git 
Rama: solucion-examen

## B-01 · No se guarda la edición del avistamiento
### Síntoma
Acción/datos, esperado y observado ANTES:

Al editar el avistamiento de cualquier criatura sale lo siguiente "Campos no permitidos en el cuerpo · petición 48b7febb-79a8-4835-bc4a-25d936261a7e" y no deja guardar, incluso volviendo a poner el mismo cambio anterior.

### Causa
La causa estaba en la coordinación entre frontend y backend. 
El servicio de avistamientos utiliza la misma lista blanca de campos 
(criatura, testigo, ubicacion, descripcion y fecha) para creación y edición. 
Sin embargo, el formulario React enviaba "criatura" al crear y "criaturaId" al editar. Como "criaturaId" no pertenece a la lista blanca del cuerpo de la API, la validación rechazaba el PUT con status 400 antes de ejecutar.

### Cambio
La corrección conceptualmente correcta es que creación y edición utilicen el mismo nombre de propiedad: 
datos.criatura = form.criatura; en (FormularioAvistamiento.tsx) linea 12

### Prueba
Se volvio a editar un campo pequeño del avistamiento de tornado azul y ese lo gurado sin problema dando en colosa tras el PUT: {"id":"cb1a57b9-511d-4c22-843a-bbb0fea757c6","metodo":"PUT","ruta":"/6ad8e4f6c84654523f036464","status":200,"ms":551}

### Estado
Resuleto y sin problemas

## B-02 · El detalle no identifica a la criatura
### Síntoma
Al entrar a "detalles" de una criatura su ID muestra un monton de numeros y letras, mas no el nombre de la criatura.

### Causa
El detalle de avistamiento podía recibir la referencia de `criatura` como un
ObjectId/ID y la API no dejaba explícito que el nombre debía viajar en la
respuesta. La capa de servicio debe poblar la referencia y el frontend debe
tratar la unión como objeto poblado, ID o referencia faltante.

### Cambio
`backend/src/services/avistamientos.service.ts` ahora usa
`populate("criatura", "_id nombre").lean()` en `obtener`, garantizando que el
endpoint entregue los datos necesarios para identificar la criatura sin
exponer campos innecesarios. `frontend/src/tipos.ts` normaliza la referencia
con `nombreCriatura`, y `DetalleAvistamiento.tsx` muestra el nombre y conserva
un enlace a la ficha mediante el ID.

### Prueba
Con un avistamiento válido, consultar
`GET /api/avistamientos/65a000000000000000000204`: la respuesta 200 contiene
`avistamiento.criatura._id` y `avistamiento.criatura.nombre`; al abrir
`/avistamientos/65a000000000000000000204`, el detalle muestra
`El Brillo del Río Wamapo`. Consultar un ID válido inexistente devuelve 404 con
`Avistamiento no encontrado`, que React muestra mediante `role="alert"` sin
dejar la pantalla en blanco.

### Estado
Resuelto.

## B-03 · Se acepta un tipo de criatura inválido
### Síntoma
Al registrar una nueva criatura como "Fansasmal" te permite hacerlo cuando no existe ese tipo de criatura dentro del back, y en cambio lo cambia por espectral
### Causa
El servicio aceptaba cualquier texto en `cuerpo` y, al actualizar, usaba
`findByIdAndUpdate` sin `runValidators: true`. Por eso el `enum` del modelo no
se aplicaba de forma confiable al `PUT`, aunque el contrato solo admite
`mitica`, `elemental`, `mecanica` y `espectral`.

### Cambio
En `backend/src/services/criaturas.service.ts` se añadió una validación
explícita contra `TIPOS` para creación y actualización, con un `ApiError(400,
"Tipo de criatura inválido")`. Además, la actualización activa
`runValidators: true` para conservar las reglas del modelo en cambios
parciales.

### Prueba
Con `PUT /api/criaturas/65a000000000000000000103` y
`{"tipo":"mitica"}`, la respuesta esperada es 200. Después, con el mismo
recurso y `{"tipo":"fantasma"}`, la respuesta esperada es 400 con
`Tipo de criatura inválido`; un GET posterior conserva `tipo: "mitica"`.
La creación con un tipo inválido usa la misma validación y también devuelve
400.

### Estado
Resuelto.

## B-04 · El filtro de avistamientos no actualiza
### Síntoma
Acción/datos, esperado y observado ANTES:

### Causa
Explicación causal y archivo/capa, no solo su nombre:

### Cambio
Qué modifiqué, por qué resuelve la causa y commit de corrección:

### Prueba
Pasos/comando, datos, status/resultado esperado y observado DESPUÉS; archivo de evidencia:

### Estado
Resuelto / parcial / no resuelto. Si es parcial, qué falta:
