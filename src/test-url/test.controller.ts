import { Get, Controller, HttpException } from "@nestjs/common";

@Controller()
export class TestUrl {
  @Get("test-error")
  testError() {
    throw new HttpException("Este es un error de prueba", 400);
  }
}
