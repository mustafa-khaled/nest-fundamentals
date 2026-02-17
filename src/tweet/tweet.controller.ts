import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { UsersService } from 'src/users/users.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Get()
  getTweets() {
    return this.tweetService.getTweets();
  }

  @Get(':tweetId')
  getTweetById(@Param('tweetId', ParseIntPipe) tweetId: number) {
    return this.tweetService.getTweetById(tweetId);
  }

  @Get('user/:userId')
  getTweetsByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.tweetService.getTweetsByUserId(userId);
  }
}
