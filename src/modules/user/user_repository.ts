import { WithId, Document } from "mongodb";
import { client } from "../../index";
import UserModel from "./user_model";

class UserRepository {
  static saveUser = async (user: UserModel): Promise<void> => {
    await client.connect();
    await client.db("master").collection("user").insertOne(user);
    await client.close();
  };

  static getUserByEmail = async (email: string): Promise<WithId<Document>> => {
    const user = await client
      .db("master")
      .collection("user")
      .findOne({ email });
    console.log(user);
    return user;
  };
}

export default UserRepository;
