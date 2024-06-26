import { UseFormRegister } from "react-hook-form";

export type Schema = UseFormRegister<{
  confirm_password: string;
  email: string;
  password: string;
}>;
