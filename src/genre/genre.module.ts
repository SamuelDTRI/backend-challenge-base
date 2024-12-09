import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { GenreController } from "./genre.controller";
import { GenreService } from "./genre.service";

@Module({
  imports: [HttpModule],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
