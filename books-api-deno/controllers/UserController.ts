import {
  RouterContext,
  BodyForm,
} from "https://raw.githubusercontent.com/oakserver/oak/main/mod.ts";

import { getUserByEmail } from "../models/Users.ts";

export default class UserController {
  public async login(context: RouterContext) {
    const { type, value } = (await context.request.body()) as BodyForm;
    console.log(type, value);

    const email = value.get("email");
    const password = value.get("password");
    console.log(email, password);

    if (email === null || password === null) {
      context.response.status = 422;
      context.response.body = { error: "email or password required" };
      return;
    }

    const user = await getUserByEmail(email);
    console.log(user);

    // const match = await bcrypt.compare(password, user.password);
    // console.log(match);

    context.response.body = "login";
  }

  public logout(context: RouterContext) {
    context.response.body = "logout";
  }
}
