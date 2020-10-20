"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_model_1 = require("../models/users.model");
class UsersController {
    list(req, res) {
        users_model_1.User.findAll({})
            .then((users) => {
            res.status(200).send({
                success: true,
                data: users
            });
        })
            .catch((err) => {
            res.status(500).send({
                success: false,
                data: err
            });
        });
    }
    create(req, res) {
        const params = req.body;
        users_model_1.User.create(params)
            .then((user) => {
            res.status(201).send({
                success: true,
                data: user
            });
        })
            .catch((err) => {
            res.status(500).send({
                success: false,
                data: err
            });
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map