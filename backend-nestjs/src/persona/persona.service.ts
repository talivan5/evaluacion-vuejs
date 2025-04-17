import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Persona } from './persona.interface';

@Injectable()
export class PersonaService {
  constructor(@InjectModel('Persona') private readonly personaModel: Model<Persona>) {}

  async create(data: Partial<Persona>): Promise<Persona> {
    const persona = new this.personaModel(data);    
    return persona.save();
  }

  async findAll(): Promise<Persona[]> {
    return this.personaModel.find().exec();
  }

  async findOne(id: string): Promise<Persona> {
    const persona = await this.personaModel.findById(id).exec();
    if (!persona) {
      throw new Error('Persona not found');
    }
    return persona;
  }

  async update(id: string, data: Partial<Persona>): Promise<Persona> {
    const updatedPersona = await this.personaModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedPersona) {
      throw new Error('Persona not found or not updated');
    }
    return updatedPersona;
  }

  async delete(id: string): Promise<Persona> {
    const deletedPersona = await this.personaModel.findByIdAndDelete(id).exec();
    if (!deletedPersona) {
      throw new Error('Persona not found or not deleted');
    }
    return deletedPersona;
  }
}
