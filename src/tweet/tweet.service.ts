import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    private readonly hashtagService: HashtagService,

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
    const hashtags = await this.hashtagService.findHashtags(
      createTweetDto.hashtags || [],
    );

    const tweet = this.tweetRepository.create({
      ...createTweetDto,
      hashtags,
      user,
    });

    return this.tweetRepository.save(tweet);
  }
}
