import { Document } from 'mongoose';

export interface Persona extends Document {
  readonly nombre: string;
  readonly correo: string;
  readonly edad: number;
}
