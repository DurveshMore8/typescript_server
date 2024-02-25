import { client } from "../../index";
import UserModel from "./user_model";

class UserRepository {
  static saveUser = async (user: UserModel) => {
    await client.connect();
    await client.db("master").collection("user").insertOne(user);
    await client.close();
  };
}

export default UserRepository;
