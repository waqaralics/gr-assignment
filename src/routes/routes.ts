import { Request, Response } from "express";
import { UsersController } from "../controllers/users.controller";

export class Routes {
    public usersController: UsersController = new UsersController();

    public routes(app): void {
        // app.route("/").get(this.usersController.list);

        app.route("/users")
            .get(this.usersController.list);
    }
}
