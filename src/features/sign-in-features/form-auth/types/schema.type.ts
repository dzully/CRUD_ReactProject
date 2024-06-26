import { UseFormRegister } from "react-hook-form";

export type Schema = UseFormRegister<{
  email: string;
  password: string;
}>;
