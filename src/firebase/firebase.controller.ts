import { Body, Controller, Post } from "@nestjs/common";
import { AuthFirebase } from "./firebase.service";

@Controller("auth")
export class FireBaseController {
  public constructor(private readonly authFirebase: AuthFirebase) {}

  @Post("signup")
  async singup(@Body("email") email: string, @Body("password") password: string) {
    return this.authFirebase.singup(email, password);
  }

  @Post("signin")
  async signin(@Body("email") email: string, @Body("password") password: string) {
    return this.authFirebase.signin(email, password);
  }
}
