import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { AxiosError } from "axios";

@Injectable()
export class TitleService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async AllMoviesByTitle(title: string) {
    try {
      console.log("Esta es la API =", this.configService.get("API_KEY"));

      const response = await firstValueFrom(
        this.httpService.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.configService.get("API_KEY"),
            query: title,
          },
        }),
      );

      const exactMovie = response.data.results.filter(
        (movie) => movie.title.toLowerCase() === title.toLowerCase(),
      );

      return exactMovie;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error of AXios:", error.response?.data || error.message);
      } else {
        console.error("This is the error:", error);
      }
      throw new Error("Error fetching movies with the title");
    }
  }
}
