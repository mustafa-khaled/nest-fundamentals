import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  password: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  private readonly users = [
    {
      id: 1,
      name: 'Mustafa',
      email: 'mustafa@mail.com',
      gender: 'male',
      password: 'password',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mariam',
      email: 'mariam@mail.com',
      gender: 'female',
      password: 'password',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Khaled',
      email: 'khaled@mail.com',
      gender: 'male',
      password: 'password',
      isMarried: true,
    },
  ];

  getAllUsers() {
    if(this.authService.isAuthenticated){
      return this.users;
    }
    return 'You are not authenticated!!';
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }
  findUserByEmailAndPassword(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );

    return user;
  }
}
