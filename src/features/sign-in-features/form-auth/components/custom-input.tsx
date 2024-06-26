import { Schema } from "../types/schema.type";

type CustomInputProps = {
  autoComplete: string;
  disabled: boolean;
  id: "email" | "password";
  name: string;
  register: Schema;
  required: boolean;
  type: string;
};

export const CustomInput = ({
  autoComplete,
  disabled,
  id,
  name,
  register,
  required,
  type,
}: CustomInputProps) => {
  return (
    <input
      {...register(id)}
      autoComplete={autoComplete}
      disabled={disabled}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12 p-2"
      id={id}
      name={name}
      required={required}
      type={type}
    />
  );
};
