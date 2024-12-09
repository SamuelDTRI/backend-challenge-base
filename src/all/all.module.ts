import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { AllMoviesController } from "./allMovies.controller";
import { AllMoviesService } from "./allMovies.service";

@Module({
  imports: [HttpModule],
  controllers: [AllMoviesController],
  providers: [AllMoviesService],
})
export class AllModule {}
