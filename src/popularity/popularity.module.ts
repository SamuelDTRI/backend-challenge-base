import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { PopularityController } from "./popularity.controller";
import { PopularityService } from "./popularity.service";

@Module({
  imports: [HttpModule],
  controllers: [PopularityController],
  providers: [PopularityService],
})
export class PopularityModule {}
