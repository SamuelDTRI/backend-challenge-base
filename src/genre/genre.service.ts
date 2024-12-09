import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

@Injectable()
export class GenreService {
  constructor(
    private readonly configServive: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async moviesByGenre(genreid: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: this.configServive.get("API_KEY"),
            with_genres: genreid,
          },
        }),
      );

      return response.data.results;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error with Axios", error.response?.data || error.message);
      } else {
        console.error("This is the error:", error);
      }
      throw new Error("Error fetching the movies by genre");
    }
  }
}
