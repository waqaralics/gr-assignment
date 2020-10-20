import { Request, Response } from "express";
import { UsersController } from "../controllers/users.controller";
import { DevicesController } from "../controllers/devices.controller";

export class Routes {
    public usersController: UsersController = new UsersController();
    public devicesController: DevicesController = new DevicesController();

    public routes(app): void {
        // app.route("/").get(this.usersController.list);

        app.route("/users")
            .get(this.usersController.list)
            .post(this.usersController.create);

        app.route("/devices")
            .get(this.devicesController.list)
            .post(this.devicesController.create)
            .put(this.devicesController.assignToUser)


    }
}
