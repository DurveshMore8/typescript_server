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

  static getUserByEmail = async (email: string): Promise<UserModel> => {
    const user_document = await UserRepository.getUserByEmail(email);
    const user: UserModel = new UserModel({
      name: user_document.name,
      email: user_document.email,
      username: user_document.username,
      password: user_document.password,
    });
    return user;
  };
}

export default UserService;
