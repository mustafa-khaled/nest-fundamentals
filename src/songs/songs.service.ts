import { Injectable } from '@nestjs/common';

export class Song {
  id: number;
  title: string;
  artist: string;
}

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  getAllSongs() {
    return this.songs;
  }

  getSongById(id: string) {
    return this.songs.find((song) => song.id === Number(id));
  }

  create(song) {
    return this.songs.push(song);
  }

  update(id: string, song: Song) {
    return this.songs.map((song) => (song.id === Number(id) ? song : song));
  }

  delete(id: string) {
    return this.songs.filter((song) => song.id !== Number(id));
  }
}
