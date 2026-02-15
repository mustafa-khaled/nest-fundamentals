import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  ParseBoolPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('{:isMarried}')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ) {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    // return this.userService.createUser(user);
    return 'User created successfully.';
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    return 'User updated successfully.';
  }
}
