import { Request, Response } from "express";
import { User, UserInterface } from "../models/users.model";

export class UsersController {
  public list(req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: User[]) => {
        res.status(200).send({
          success: true,
          data: users
        });
      })
      .catch((err: Error) => {
        res.status(500).send({
          success: false,
          data: err
        })
      });
  }

  public create(req: Request, res: Response) {
    const params: UserInterface = req.body;

    User.create<User>(params)
      .then((user: User) => {
        res.status(201).send({
          success: true,
          data: user
        });
      })
      .catch((err: Error) => {
        res.status(500).send({
          success: false,
          data: err
        });
      });
  }
}
