// tslint:disable:no-console
import { Maybe } from "ramda-fantasy";
import { IUser } from "src/helpers/users";
import { Container } from "unstated";
import { auth } from "../firebase_adapter";

const { Nothing } = Maybe;

type AuthTypes = "email" | "facebook" | "google";

interface IAuthState {
  user: Maybe<IUser>;
  redirect: boolean;
}

class AuthState extends Container<IAuthState> {
  public state = {
    redirect: false,
    user: Nothing()
  };

  public createUser(email: string, pass: string, type: AuthTypes) {
    switch (type) {
      case "email":
        return auth
          .createUserWithEmailAndPassword(email, pass)
          .catch(e => console.log(e));

      case "facebook":
      case "google":
        console.log("Not Implemented");
        return;
    }
  }

  public onAuthStateChanged() {
    auth.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        console.log("User logged in: ", user);
      } else {
        console.log("User logged out");
      }
      return;
    });
  }
}

export default AuthState;
export { IAuthState };
