import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { HttpExceptionFilter } from "./common/filtters/http-exception.filter";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: "GET,PUT,POST",
    credentials: true, //cookies para despues si escalo la app :)
  });

  app.useGlobalFilters(new HttpExceptionFilter()); // manejo glgobal de errores.
  await app.listen(3001);
}
void bootstrap();
