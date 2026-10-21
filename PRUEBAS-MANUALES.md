# Verificación manual · Versión B

## B-01
- [X] El formulario guarda la edición con 200 y conserva lo no modificado.
- [X] GET y recarga confirman la nueva criatura y ubicación.
- [X] Una referencia inexistente por HTTP recibe 404 y conserva la asociación anterior.

## B-02
- [ ] El detalle muestra el nombre de la criatura relacionada.
- [ ] El endpoint y el tipo/uso del dato en React son coherentes.
- [ ] Un id de avistamiento válido inexistente produce error comprensible sin pantalla en blanco.

## B-03
- [ ] Un tipo válido como mitica se guarda con status 200.
- [ ] El valor fantasma se rechaza con 400 y mensaje comprensible.
- [ ] Un GET después del rechazo conserva el último tipo válido.

## B-04
- [ ] Cambiar el selector inicia la consulta y solo muestra registros asociados.
- [ ] Se diferencian loading, error y empty; crear una criatura sin avistamientos permite probar vacío.
- [ ] Volver a Todas restaura la lista sin actualización manual.

## Recorrido integrado final
1. Consultar y filtrar avistamientos por criatura.
2. Abrir detalle con nombre de criatura.
3. Editar avistamiento: otra criatura existente y nueva ubicación.
4. Recargar y confirmar asociación persistida.
5. Actualizar criatura con tipo válido.
6. Rechazar tipo fantasma y comprobar tipo anterior.

## Loading, error y empty
Puedes usar throttling en DevTools para observar carga. Detén únicamente TU backend, cambia la consulta y observa el error; vuelve a iniciarlo y reintenta. No desconectes la red del aula ni modifiques permisos Atlas.

## Regresión
Crear una criatura válida sigue funcionando. Un id bien formado inexistente devuelve 404. Comprobar una operación que funcionaba antes de corregir, con datos descartables.
Si aparece un fallo no intencional ajeno a los reportes, informa al docente; no se convierte automáticamente en otra tarea evaluable.
