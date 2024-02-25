interface UserProps {
  name: string;
  email: string;
  username: string;
  password: string;
}

class UserModel {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.username = props.username;
    this.password = props.password;

    if (!this.validatePassword()) {
      throw Error("increase password strength");
    }
  }

  private validatePassword = (): boolean => {
    return this.password.length > 6;
  };
}

export default UserModel;
