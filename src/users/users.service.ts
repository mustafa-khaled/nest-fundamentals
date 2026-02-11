import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Mustafa',
    },
    {
      id: 2,
      name: 'Khaled',
    },
  ];

  getUsers() {
    return this.users;
  }
}
