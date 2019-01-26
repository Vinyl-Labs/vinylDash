import { Maybe } from "ramda-fantasy";

interface IUser {
  credentials: any;
  token: Maybe<string>;
  role: any;
}

export { IUser };
