import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Get()
  @Get(':userId')
  getTweets(@Param('userId') userId?: string) {
    return this.tweetService.getTweets();
  }
}
