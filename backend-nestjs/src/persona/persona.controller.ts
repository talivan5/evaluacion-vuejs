import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona.interface';

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() personaData: Partial<Persona>) {
    return this.personaService.create(personaData);
  }

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() personaData: Partial<Persona>) {
    return this.personaService.update(id, personaData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personaService.delete(id);
  }
}
