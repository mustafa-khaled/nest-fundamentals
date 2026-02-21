import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(userDto: CreateUserDto) {
    const isExist = await this.userRepository.findOne({
      where: { email: userDto.email },
    });

    if (isExist) {
      throw new BadRequestException('User already exists');
    }

    const user = this.userRepository.create(userDto);

    return this.userRepository.save(user);
  }
}
