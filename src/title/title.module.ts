import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TitleController } from "./title.controller";
import { TitleService } from "./title.service";

@Module({
  imports: [HttpModule],
  controllers: [TitleController],
  providers: [TitleService],
})
export class TitleModule {}
