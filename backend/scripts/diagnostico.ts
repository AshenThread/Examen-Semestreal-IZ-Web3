import mongoose from 'mongoose';
import {conectarDB,cerrarDB} from '../src/conexionDB';
import {leerEnv} from '../src/config/env';
async function main(){await conectarDB();const db=mongoose.connection.db!;await db.command({ping:1});console.log({base:leerEnv().dbName,conexion:'ok',criaturas:await db.collection('criaturas').countDocuments(),avistamientos:await db.collection('avistamientos').countDocuments()});}
main().catch(()=>{console.error('Diagnóstico falló; revisar variables, red y permisos sin compartir la URI.');process.exitCode=1;}).finally(cerrarDB);
