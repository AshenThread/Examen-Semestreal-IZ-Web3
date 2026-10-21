# Evidencias
Guarda capturas o texto de cliente HTTP/Network/Compass relevantes por reporte y relaciónalas en AUDITORIA.md. No incluir URI, contraseñas, tokens ni datos personales de compañeros.

TODAS LAS REFERENCIAS Y EVIDENCIAS ESTARAN EN UNA CARPETA ZIP CON SU NOMBRE ej. "1. evi (foto)"

1. Se logro exitosamente la coneccion con el repo personal y clonar el repo del examen con ayuda de copilot, el back y front se ejecutan en terminales diferentes con uns distintitivo de color 
Rojo: Backend
Amarillo: Front
Gris: General e Installs

2. La apliacion deja registrar una criatura y avistamiento de la misma de forma correcta

3. El cambio fue realizado y el PUT ya permite editar un avistamiento, todo fue documentado en AUDITORIA.md

4. Se hizo un cambio pequeño con IA de una funcion que iba a ser decapritada en el JSON, se lo solucion con QuickFix de Copilot

5. El problema B-02 fue resuelto con ayuda de la IA. El endpoint puebla la
   criatura con su ID y nombre, y el detalle del avistamiento muestra el nombre
   relacionado.

6. El problema B-03 fue resuelto con ayuda de la IA y la causa fue identificada
   en la validación del servicio. Los tipos se validan contra la lista permitida
   y un valor como fantasma recibe 400; no se sustituye por otro tipo.

7. El caso B-04 mostraba problemas porque el cambio del selector no disparaba
   una nueva consulta. Ahora el filtro depende de la criatura seleccionada y
   vuelve a mostrar todos los registros al elegir Todas.
