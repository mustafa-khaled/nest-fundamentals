import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  gender?: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'Mustafa',
      email: 'mustafa@mail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mariam',
      email: 'mariam@mail.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Khaled',
      email: 'khaled@mail.com',
      gender: 'male',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User) {
    // this.users.push(user);
    return user;
  }
}
