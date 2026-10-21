# Entrega obligatoria · Versión B

## 1. Obtener la versión asignada y preparar tu remoto
El docente tiene dos repositorios PÚBLICOS de distribución, A y B. Crea un repositorio PÚBLICO vacío en TU cuenta, sin README adicional. Clona tu versión asignada:

```bash
git clone <URL-DOCENTE-VERSION-B> examen-pawnee
cd examen-pawnee
git remote set-url origin <URL-REPOSITORIO-PUBLICO-PROPIO>
git remote -v
git switch -c examen/e017
```
Sustituir el código de ejemplo por el tuyo. No usar los símbolos < > como URL real. No hacer push ni PR a los repositorios docentes; no se exige fork.

## 2. Durante el trabajo
Revisar git status/diff. Registrar cambios lógicos con mensajes descriptivos. Guardar evidencias y completar auditoría. .env debe estar ignorado; .gitignore no protege un secreto que ya se versionó.

## 3. Publicar tu entrega
Preparar todos los archivos que corresponden a tu solución y hacer commit. Incluir package-lock.json generado, auditoría y evidencias. No incluir dependencias instaladas ni secretos.

```bash
git status
git add <ARCHIVOS-DE-LA-ENTREGA>
git commit -m "docs: completa auditoria y evidencias"
git push -u origin examen/e017
git rev-parse HEAD
```
La rama puede tener otro nombre si se identifica claramente. El repositorio debe ser público y accesible al revisar.

## 4. ZIP del MISMO commit para D2L
Con el árbol limpio y los archivos entregables versionados:

```bash
node scripts/entrega.mjs e017
```
Este script verifica árbol limpio y algunos nombres sensibles versionados, produce fuera del repo un ZIP de HEAD y muestra SHA/branch/remote. NO publica, NO hace commits, NO revisa contenido de imágenes ni puede garantizar ausencia absoluta de secretos.
Alternativa manual equivalente:

```bash
git archive --format=zip --output=../entrega-e017-B.zip HEAD
git rev-parse HEAD
```
Antes del ZIP, inspeccionar también contenido, capturas y logs.

## 5. En D2L dentro del plazo
Adjuntar ZIP y escribir: código, versión B, URL pública propia, rama y SHA COMPLETO. El ZIP incluye AUDITORIA.md, USO-IA.md, ENTREGA.md y evidencias, además del código. No basta el enlace.
El SHA va en el texto de D2L; no hay que escribir en un archivo versionado el hash del mismo commit que contiene ese archivo.
La evaluación usa ese commit y esa copia recibida, no ediciones posteriores. Si D2L/GitHub presenta falla externa, avisar antes del cierre para que el docente aplique el protocolo institucional; no se cambia unilateralmente la fecha.

## Checklist final

```text
[X] backend/.env no está versionado
[X] package-lock.json de raíz, backend y frontend están incluidos
[X] AUDITORIA.md tiene B-01, B-02, B-03 y B-04 completos
[X] PRUEBAS-MANUALES.md refleja las pruebas realizadas
[X] USO-IA.md está actualizado
[X] evidencias/ contiene capturas o respuestas sin secretos
[X] npm run check pasa
[X] npm run build pasa
[X] git status no muestra cambios
[X] se hizo push de la rama correcta
[X] el ZIP se creó desde ese mismo HEAD
[X] D2L contiene ZIP, código, versión, URL, rama y SHA completo
```

## Guía visual rápida

```text
Código listo
    |
    v
check + build
    |
    v
auditoría + pruebas + evidencias
    |
    v
commit
    |
    v
push
    |
    v
git status limpio
    |
    v
node scripts/entrega.mjs CODIGO
    |
    v
subir ZIP y copiar SHA completo en D2L
```

Si un cuadro falla, no continúes al siguiente: corrige, vuelve a validar y
genera el ZIP únicamente después del commit final.
