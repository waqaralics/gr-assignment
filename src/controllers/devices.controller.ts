import { Request, Response } from "express";
import { User } from "../models/users.model";
import { AssignmentInterface, Device, DeviceInterface, ListRequestInterface } from "../models/devices.model";

export class DevicesController {
  public list(req: Request, res: Response) {
    const deviceType = req.query.deviceType;
    const userEmail = req.query.userEmail;
    const userType = req.query.userType;

    User.findAll<User>({
      include: {
        model: Device,
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
      .then((users: User[]) => {
        res.status(200).send({
          success: true,
          data: users
        });
      })
      .catch((err: Error) => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.status(500).send({
          success: false,
          data: err
        })
      });
  }

  public create(req: Request, res: Response) {
    const params: DeviceInterface = req.body;

    Device.create<Device>(params)
      .then((device: Device) => {
        res.status(201).send({
          success: true,
          data: device
        });
      })
      .catch((err: Error) => {
        res.status(500).send({
          success: false,
          data: err
        });
      });
  }

  public assignToUser(req: Request, res: Response) {
    const params: AssignmentInterface = req.body;

    return User.findByPk(params.userEmail)
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
        return Device.findByPk(params.deviceId)
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

            (user as any).addDevice(device);
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
