import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Mustafa',
      age: 24,
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mariam',
      age: 25,
      gender: 'female',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Khaled',
      age: 25,
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
    this.users.push(user);
    return user;
  }
}
