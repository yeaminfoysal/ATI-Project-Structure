// types/auth.d.ts or in the same file
import { JwtPayload } from "jwt-decode";

export interface MyJwtPayload extends JwtPayload {
  email?: string;
  id?: string;
  name?: string;
}
