import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { AxiosError } from "axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PopularityService {
  constructor(
    private readonly configServie: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async moviesPopularity(order: string = "desc") {
    try {
      const response = await firstValueFrom(
        this.httpService.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: this.configServie.get("API_KEY"),
          },
        }),
      );

      const moviesSorted = response.data.results.sort((a, b) => {
        return order === "asc"
          ? a.popularity - b.popularity // orden ascendente
          : b.popularity - a.popularity; // oreden descendente
      });

      return moviesSorted;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error with axios", error.response?.data || error.message);
      } else {
        console.error("This is the error:", error);
      }
      throw new Error("Error fetching movies by popularity");
    }
  }
}
