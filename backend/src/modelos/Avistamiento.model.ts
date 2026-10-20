import { Schema, model } from 'mongoose';
/** ref nombra el modelo; la existencia del documento se comprueba en el servicio. */
const esquema = new Schema({
  criatura: { type: Schema.Types.ObjectId, ref: 'Criatura', required: true },
  testigo: { type: String, required: true, trim: true, maxlength: 100 },
  ubicacion: { type: String, required: true, trim: true, maxlength: 150 },
  fecha: { type: Date, required: true },
  descripcion: { type: String, default: '', maxlength: 1000 }
}, { timestamps: true, collection: 'avistamientos', strict: 'throw' });
export const Avistamiento = model('Avistamiento', esquema);
