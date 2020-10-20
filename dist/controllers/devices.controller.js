"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesController = void 0;
const users_model_1 = require("../models/users.model");
const devices_model_1 = require("../models/devices.model");
class DevicesController {
    list(req, res) {
        const deviceType = req.query.deviceType;
        const userEmail = req.query.userEmail;
        const userType = req.query.userType;
        users_model_1.User.findAll({
            include: {
                model: devices_model_1.Device,
                as: "devices",
                attributes: ["name", "id", "ipAddress", "deviceType"],
                through: {
                    attributes: []
                },
                where: {
                    deviceType
                }
            },
            where: {
                email: userEmail,
                userType
            },
            attributes: [
                "firstName", "lastName", "email", "userType"
            ]
        })
            .then((users) => {
            res.status(200).send({
                success: true,
                data: users
            });
        })
            .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.status(500).send({
                success: false,
                data: err
            });
        });
    }
    create(req, res) {
        const params = req.body;
        devices_model_1.Device.create(params)
            .then((device) => {
            res.status(201).send({
                success: true,
                data: device
            });
        })
            .catch((err) => {
            res.status(500).send({
                success: false,
                data: err
            });
        });
    }
    assignToUser(req, res) {
        const params = req.body;
        return users_model_1.User.findByPk(params.userEmail)
            .then((user) => {
            if (!user) {
                // tslint:disable-next-line:no-console
                console.log("User not found!");
                res.status(500).send({
                    success: false,
                    data: "User not found"
                });
                return null;
            }
            return devices_model_1.Device.findByPk(params.deviceId)
                .then((device) => {
                if (!device) {
                    // tslint:disable-next-line:no-console
                    console.log("Device not found!");
                    res.status(500).send({
                        success: false,
                        data: "Device not found"
                    });
                    return null;
                }
                user.addDevice(device);
                // tslint:disable-next-line:no-console
                console.log(`>> assigned Device id=${device.id} to User =${user.email}`);
                res.status(201).send({
                    success: true
                });
            });
        })
            .catch((err) => {
            // console.log(">> Error while assigning device to user: ", err);
            res.status(500).send({
                success: false,
                data: `Error while assigning device to user ${JSON.stringify(err)}`
            });
        });
    }
}
exports.DevicesController = DevicesController;
//# sourceMappingURL=devices.controller.js.map