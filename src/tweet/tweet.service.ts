import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  getTweets(userId: number) {
    return this.tweetRepository.find({
      where: { user: { id: userId } },
      relations: { user: true },
    });
  }

  async createTweet(createTweetDto: CreateTweetDto) {
    const user = await this.userService.findUserById(createTweetDto.userId);

    const tweet = this.tweetRepository.create({
      ...createTweetDto,
      user,
    });

    return this.tweetRepository.save(tweet);
  }
}
