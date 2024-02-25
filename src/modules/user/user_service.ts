import UserModel from "./user_model";
import UserRepository from "./user_repository";

class UserService {
  static createUser = (
    name: string,
    email: string,
    username: string,
    password: string
  ) => {
    return new UserModel({ name, email, username, password });
  };

  static saveUser = (user: UserModel) => {
    UserRepository.saveUser(user);
  };
}

export default UserService;
