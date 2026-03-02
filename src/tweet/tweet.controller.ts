import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Get('user/:userId')
  getTweets(@Param('userId', ParseIntPipe) userId: number) {
    return this.tweetService.getTweets(userId);
  }

  @Get(':tweetId')
  getTweetById(@Param('tweetId', ParseIntPipe) tweetId: number) {
    return this.tweetService.getTweetBy(tweetId);
  }

  @Post()
  createTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.createTweet(tweet);
  }

  @Patch()
  updateTweet(@Body() dto: UpdateTweetDto) {
    return this.tweetService.update(dto);
  }
}
