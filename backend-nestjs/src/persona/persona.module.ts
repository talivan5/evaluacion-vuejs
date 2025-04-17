import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { PersonaSchema } from './persona.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Persona', schema: PersonaSchema }])],
  providers: [PersonaService],
  controllers: [PersonaController],
})
export class PersonaModule {}
