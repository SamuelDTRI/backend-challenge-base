import * as admin from "firebase-admin"; //admin
import * as path from "path"; //ruta.
import * as fs from "fs"; // salvacion.
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { AllModule } from "src/all/all.module";
import { GenreModule } from "src/genre/genre.module";
import { PopularityModule } from "src/popularity/popularity.module";
import { TitleModule } from "src/title/title.module";
import { FirebaseModule } from "src/firebase/firebase.module";

// Los controllers tienen la ruta predefinida como "movies" de prefijo, siguiente a este la @Query especifica para la peticion, esto lo dejo para posible mejora en la aplicacion.
// Los Services mantienen el trycatch debido a que asi los errores de entrada y salida de peticiones se manejan directamente por eficiencia y exactitud del debuggin.

const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "src/config/firebase.json"), "utf8"), // process.cwd() es el metodo para llamar a la ruta absoluta.
);

// Inicializa Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("App Name=", admin.app().name); //ya funciono con el nombre.

@Module({
  imports: [
    HttpModule.register({}), // Para peticiones http generales con los demas modulos.
    ConfigModule.forRoot({ isGlobal: true }), // Configuración global
    AllModule,
    GenreModule,
    PopularityModule,
    TitleModule,
    FirebaseModule,
  ],
})
export class AppModule {}
