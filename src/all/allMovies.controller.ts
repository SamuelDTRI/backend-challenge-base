import { Controller, Get } from "@nestjs/common";
import { AllMoviesService } from "./allMovies.service";

@Controller()
export class AllMoviesController {
  public constructor(private readonly allMoviesService: AllMoviesService) {}

  @Get("movies/all")
  async getAllMovies() {
    return this.allMoviesService.getAllMovies();
  }

  @Get("hello")
  getHello(): string {
    return "Hello World!";
  }
}
