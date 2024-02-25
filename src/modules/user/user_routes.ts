import { Router } from "express";
import UserController from "./user_controller";

const user_router: Router = Router();

user_router.post("/user/register-user", UserController.registerNewUser);

user_router.post("/user/get-user", UserController.getUser);

export { user_router };
