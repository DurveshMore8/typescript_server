import { Request, Response } from "express";
import UserService from "./user_service";

class UserController {
  static registerNewUser = (req: Request, res: Response): void => {
    const { name, email, username, password } = req.body;

    try {
      const user = UserService.createUser(name, email, username, password);

      UserService.saveUser(user);

      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

  static getUser = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    try {
      const user = await UserService.getUserByEmail(email);

      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };
}

export default UserController;
