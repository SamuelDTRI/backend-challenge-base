import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

@Injectable()
export class AllMoviesService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getAllMovies() {
    try {
      console.log("funciona con esta APIKEY =", this.configService.get("API_KEY")); //debuggear, borrar despues.

      const response = await firstValueFrom(
        this.httpService.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: this.configService.get("API_KEY"),
          },
        }),
      );

      return response.data.results;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error With Axios:", error.response?.data || error.message);
      } else {
        console.error("This is the error:", error);
      }
      throw new Error("Error to fetch the all Movies");
    }
  }
}
