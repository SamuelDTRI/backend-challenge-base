import { Controller, Get, Query } from "@nestjs/common";
import { PopularityService } from "./popularity.service";

@Controller()
export class PopularityController {
  public constructor(private readonly popularityService: PopularityService) {}

  @Get("movies/popularity")
  async getMoviesByPopularity(@Query("order") order?: string) {
    const validOrder = order === "asc" || order === "desc" ? order : "desc";
    return this.popularityService.moviesPopularity(validOrder);
  }
}
