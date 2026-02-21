import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  isAuthenticated: boolean = false;

  login(email: string, password: string) {
    return 'User does not exits!!';
  }
}
