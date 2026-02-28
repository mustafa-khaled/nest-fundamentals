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
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  async createUser(userDto: CreateUserDto) {
    // if profile is not provided, create an empty profile
    userDto.profile = userDto.profile ?? {};

    let user = this.userRepository.create(userDto);

    return this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    await this.userRepository.delete(id);

    if (user.profile?.id) {
      await this.profileRepository.delete(user.profile.id);
    }

    return {
      deleted: true,
    };
  }
}
