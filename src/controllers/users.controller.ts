import { Request, Response } from "express";
import { User } from "../models/users.model";

export class UsersController {
  public list(req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: User[]) => {
        res.status(200).json(users);
      })
      .catch((err: Error) => {
        res.status(500).json(err)
      });
  }


}
