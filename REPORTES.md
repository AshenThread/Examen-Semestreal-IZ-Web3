# Reportes de soporte · Versión B

Estos reportes no indican la causa ni qué archivo cambiar. Hay registros semilla para investigar cada incidencia independientemente.

## B-01 · No se guarda la edición del avistamiento

### Síntoma y reproducción
Abrir un avistamiento semilla → Editar, cambiar la criatura asociada y la ubicación y guardar. La edición no termina correctamente.

### Resultado esperado
- El formulario guarda la edición con 200 y conserva lo no modificado.
- GET y recarga confirman la nueva criatura y ubicación.
- Una referencia inexistente por HTTP recibe 404 y conserva la asociación anterior.

## B-02 · El detalle no identifica a la criatura

### Síntoma y reproducción
Abrir el detalle de un avistamiento. Aparece un id o información incompleta en vez del nombre de su criatura.

### Resultado esperado
- El detalle muestra el nombre de la criatura relacionada.
- El endpoint y el tipo/uso del dato en React son coherentes.
- Un id de avistamiento válido inexistente produce error comprensible sin pantalla en blanco.

## B-03 · Se acepta un tipo de criatura inválido

### Síntoma y reproducción
Desde un cliente HTTP actualizar una criatura con tipo fantasma. El sistema lo permite, pero solo se admiten mitica, elemental, mecanica y espectral. El selector HTML no protege a la API.

### Resultado esperado
- Un tipo válido como mitica se guarda con status 200.
- El valor fantasma se rechaza con 400 y mensaje comprensible.
- Un GET después del rechazo conserva el último tipo válido.

## B-04 · El filtro de avistamientos no actualiza

### Síntoma y reproducción
En Avistamientos cambiar Todas a una criatura concreta y luego a otra, sin pulsar Actualizar lista. Los resultados no corresponden a la selección.

### Resultado esperado
- Cambiar el selector inicia la consulta y solo muestra registros asociados.
- Se diferencian loading, error y empty; crear una criatura sin avistamientos permite probar vacío.
- Volver a Todas restaura la lista sin actualización manual.

