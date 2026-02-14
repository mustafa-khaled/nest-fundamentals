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
      gender: 'Male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mariam',
      age: 25,
      gender: 'Female',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Khaled',
      age: 25,
      gender: 'Male',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getUserByIdAndGender(id: number, gender: string) {
    return this.users.find(
      (user) => user.id === id && user.gender === gender,
    );
  }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }
}
