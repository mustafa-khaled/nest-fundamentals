import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  isAuthenticated: boolean = false;

  login(email: string, password: string) {
    const user = this.userService.findUserByEmailAndPassword(email, password);

    if (user) {
      this.isAuthenticated = true;
      return 'My_TOKEN';
    }
    return 'User does not exits!!';
  }
}
