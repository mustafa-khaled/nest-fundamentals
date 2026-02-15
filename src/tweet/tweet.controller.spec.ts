import { Test, TestingModule } from '@nestjs/testing';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';

describe('TweetController', () => {
  let appController: TweetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TweetController],
      providers: [TweetService],
    }).compile();

    appController = app.get<TweetController>(TweetController);
  });
});
