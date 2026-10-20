import assert from 'node:assert/strict';
import {Criatura} from '../src/modelos/Criatura.model';
/** Mongoose real sin conexión; no verifica actualizaciones ni UI. */
async function main(){
 await new Criatura({nombre:'Prueba',tipo:'mitica',nivelPeligro:5}).validate();
 await assert.rejects(new Criatura({nombre:'Prueba',tipo:'mitica',nivelPeligro:999}).validate());
 await assert.rejects(new Criatura({nombre:'Prueba',tipo:'fantasma',nivelPeligro:5}).validate());
 console.log('Validaciones de creación correctas.');
}
main().catch(()=>{process.exitCode=1;});
