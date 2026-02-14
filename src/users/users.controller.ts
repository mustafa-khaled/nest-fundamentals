import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Get(':id/:gender')
  getUserByIdAndGender(@Param() params: { id: string; gender: string }) {
    return this.userService.getUserByIdAndGender(
      Number(params.id),
      params.gender,
    );
  }

  @Post()
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
