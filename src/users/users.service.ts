import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(userDto: CreateUserDto) {
    // if profile is not provided, create an empty profile
    userDto.profile = userDto.profile ?? {};

    let user = this.userRepository.create(userDto);

    return this.userRepository.save(user);
  }
}
