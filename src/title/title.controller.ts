import { Get, Controller, Query } from "@nestjs/common";
import { TitleService } from "./title.service";

@Controller()
export class TitleController {
  public constructor(private readonly titleService: TitleService) {}

  @Get("movies/title")
  async moviesByTitle(@Query("title") title: string) {
    return this.titleService.AllMoviesByTitle(title);
  }
}
