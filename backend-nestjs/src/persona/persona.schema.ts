import { Schema } from 'mongoose';

export const PersonaSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  edad: { type: Number, required: true },
});
