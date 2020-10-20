"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const users_controller_1 = require("../controllers/users.controller");
class Routes {
    constructor() {
        this.usersController = new users_controller_1.UsersController();
    }
    routes(app) {
        // app.route("/").get(this.usersController.list);
        app.route("/users")
            .get(this.usersController.list);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map