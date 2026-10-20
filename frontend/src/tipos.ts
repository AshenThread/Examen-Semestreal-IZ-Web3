export const TIPOS=['mitica','elemental','mecanica','espectral'] as const;
export type Tipo=typeof TIPOS[number];
export const ESTADOS=['activa','en_investigacion','descartada'] as const;
export type Estado=typeof ESTADOS[number];
export interface Criatura{_id:string;nombre:string;tipo:Tipo;habilidades:string[];nivelPeligro:number;estado:Estado;createdAt:string;updatedAt:string;}
export type CriaturaInput=Omit<Criatura,'_id'|'createdAt'|'updatedAt'>;
export interface Avistamiento{_id:string;criatura:Criatura|string|null;testigo:string;ubicacion:string;descripcion:string;fecha:string;createdAt:string;updatedAt:string;}
export interface AvistamientoInput{criatura:string;testigo:string;ubicacion:string;descripcion:string;fecha:string;}
/** Maneja referencias crudas o faltantes sin romper la pantalla. */
export function nombreCriatura(c:Avistamiento['criatura']){return c===null?'Referencia no disponible':typeof c==='string'?`ID: ${c}`:c.nombre;}
export function idCriatura(c:Avistamiento['criatura']){return c===null?'':typeof c==='string'?c:c._id;}
