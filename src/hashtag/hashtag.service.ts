import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hashtag } from './hashtag.entity';
import { Repository } from 'typeorm';
import { CreateHashtagDto } from './dto/create-hashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(Hashtag)
    private readonly hashtagRepository: Repository<Hashtag>,
  ) {}

  async create(dto: CreateHashtagDto) {
    const hashtag = this.hashtagRepository.create(dto);
    return this.hashtagRepository.save(hashtag);
  }

  async findAll() {
    return this.hashtagRepository.find();
  }
}
