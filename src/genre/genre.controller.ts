import { Controller, Get, Query } from "@nestjs/common";
import { GenreService } from "./genre.service";

@Controller()
export class GenreController {
  public constructor(private readonly genreService: GenreService) {}

  @Get("movies/genreid")
  async moviesGenre(@Query("genreid") genreid: string) {
    return this.genreService.moviesByGenre(genreid);
  }
}
