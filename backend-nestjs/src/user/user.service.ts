import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  async getUsers() {
    const response = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/users'),
    );
    const nacionalidades = ['Boliviano', 'Mexicano', 'Colombiano', 'Peruano', 'Chileno'];

    return response.data.map(user => ({
      id: user.id,
      nombre: user.name,
      apellido: faker.name.lastName(),
      nacionalidad: nacionalidades[Math.floor(Math.random() * nacionalidades.length)],
      avatar: `https://i.pravatar.cc/150?img=${user.id}`
    }));
  }
}
