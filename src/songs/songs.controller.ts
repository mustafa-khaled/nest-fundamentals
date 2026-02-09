import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  HttpException,
  HttpStatus,
  Scope,
  Inject,
} from '@nestjs/common';
import { Song, SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import type { Connection } from 'src/common/constants/connection';

@Controller({
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,
    );
  }

  @Get()
  getAllSongs() {
    try {
      return this.songsService.getAllSongs();
    } catch (err) {
      throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: err },
      );
    }
  }

  @Get(':id')
  getSongById(@Param('id') id: string) {
    return this.songsService.getSongById(id);
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() song: Song) {
    return this.songsService.update(id, song);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songsService.delete(id);
  }
}
