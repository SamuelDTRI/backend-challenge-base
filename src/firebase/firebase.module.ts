import { Module } from "@nestjs/common";
import { FireBaseController } from "./firebase.controller";
import { AuthFirebase } from "./firebase.service";

@Module({
  controllers: [FireBaseController],
  providers: [AuthFirebase],
})
export class FirebaseModule {}
