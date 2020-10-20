"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const users_controller_1 = require("../controllers/users.controller");
const devices_controller_1 = require("../controllers/devices.controller");
class Routes {
    constructor() {
        this.usersController = new users_controller_1.UsersController();
        this.devicesController = new devices_controller_1.DevicesController();
    }
    routes(app) {
        // app.route("/").get(this.usersController.list);
        app.route("/users")
            .get(this.usersController.list)
            .post(this.usersController.create);
        app.route("/devices")
            .get(this.devicesController.list)
            .post(this.devicesController.create)
            .put(this.devicesController.assignToUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map