import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetService {
  private tweets = [
    {
      id: 1,
      content: 'Hello tweets',
    },
    {
      id: 2,
      content: 'Hello tweets 2',
    },
  ];
  getTweets() {
    return this.tweets;
  }
}
