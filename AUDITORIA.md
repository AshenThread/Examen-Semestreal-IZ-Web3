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
Acción/datos, esperado y observado ANTES:

### Causa
Explicación causal y archivo/capa, no solo su nombre:

### Cambio
Qué modifiqué, por qué resuelve la causa y commit de corrección:

### Prueba
Pasos/comando, datos, status/resultado esperado y observado DESPUÉS; archivo de evidencia:

### Estado
Resuelto / parcial / no resuelto. Si es parcial, qué falta:

## B-03 · Se acepta un tipo de criatura inválido
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

