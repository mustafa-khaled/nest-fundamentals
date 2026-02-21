import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly userService: UsersService) {}
  private readonly tweets = [
    {
      id: 1,
      content: 'Hello tweets',
      userId: 1,
    },
    {
      id: 2,
      content: 'Hello tweets 2',
      userId: 2,
    },
  ];

  getTweets() {
    return this.tweets;
  }

  getTweetById(id: number) {
    return this.tweets.find((tweet) => tweet.id === id);
  }

  getTweetsByUserId(userId: number) {}
}
