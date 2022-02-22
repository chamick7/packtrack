declare namespace Express {
  import { UserResponse } from "./src/types/auth.type";

  export interface Request {
    user: UserResponse;
  }
  export interface Response {
    user: UserResponse;
  }
}
