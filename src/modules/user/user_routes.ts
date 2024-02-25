import { Router } from "express";
import UserController from "./user_controller";

const user_router: Router = Router();

user_router.post("/user/register-user", UserController.registerNewUser);

export { user_router };
