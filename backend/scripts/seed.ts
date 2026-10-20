import fs from 'node:fs/promises';
import {conectarDB,cerrarDB} from '../src/conexionDB';
import {Criatura} from '../src/modelos/Criatura.model';
import {Avistamiento} from '../src/modelos/Avistamiento.model';
/** Solo preparación docente; no borra ni sobrescribe datos existentes. */
async function main(){
 if(!process.argv.includes('--confirmar-base-vacia'))throw new Error('Requiere --confirmar-base-vacia');
 await conectarDB();
 if(await Criatura.countDocuments()||await Avistamiento.countDocuments())throw new Error('Base no vacía. Solicitar restauración al docente.');
 const datos=JSON.parse(await fs.readFile('fixtures/base.json','utf8'));
 await Criatura.create(datos.criaturas);await Avistamiento.create(datos.avistamientos);console.log('Insertadas 3 criaturas y 4 avistamientos.');
}
main().catch(e=>{console.error(e instanceof Error?e.message:'Error');process.exitCode=1;}).finally(cerrarDB);
