"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_model_1 = require("../models/users.model");
class UsersController {
    list(req, res) {
        users_model_1.User.findAll({})
            .then((users) => {
            res.status(200).json(users);
        })
            .catch((err) => {
            res.status(500).json(err);
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map