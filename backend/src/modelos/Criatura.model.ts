import { Schema, model } from 'mongoose';
export const TIPOS = ['mitica', 'elemental', 'mecanica', 'espectral'] as const;
/** Habilidades acotadas dentro del documento; reglas en tiempo de ejecución. */
const esquema = new Schema({
  nombre: { type: String, required: true, trim: true, maxlength: 100 },
  tipo: { type: String, required: true, enum: [...TIPOS] },
  habilidades: { type: [String], default: [], validate: [(a: string[]) => a.length <= 12, 'Máximo 12 habilidades'] },
  nivelPeligro: { type: Number, required: true, min: 1, max: 10 },
  estado: { type: String, enum: ['activa','en_investigacion','descartada'], default: 'activa' }
}, { timestamps: true, collection: 'criaturas', strict: 'throw' });
export const Criatura = model('Criatura', esquema);
