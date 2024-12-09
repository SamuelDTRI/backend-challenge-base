import * as admin from "firebase-admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthFirebase {
  constructor() {}

  async singup(email: string, password: string): Promise<any> {
    try {
      const singupUser = await admin.auth().createUser({
        email: email,
        password: password,
      });

      return {
        message: "created user ok",
        userId: singupUser.uid, //esto es de firebase directamente.
      };
    } catch (error) {
      const err = error as Error; //debuggin una vez mas.
      throw new Error(`Error creating user: ${err.message}`);
    }
  }

  async signin(email: string, pasword: string): Promise<any> {
    try {
      const singInUser = await admin.auth().getUserByEmail(email);
      const token = await admin.auth().createCustomToken(singInUser.uid);

      return {
        message: "Signed user ok",
        userId: singInUser.uid,
        token: token,
      };
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message); // mas facil y claro el error.
    }
  }
}
