import { Schema } from "../types/schema.type";
import { CustomInput } from "./custom-input";

type PasswordProps = {
  disabled: boolean;
  register: Schema;
};

export const ConfirmPassword = ({ disabled, register }: PasswordProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="confirm_password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirm Password
        </label>
      </div>
      <div className="mt-2">
        <CustomInput
          autoComplete="confirm_password"
          disabled={disabled}
          id="confirm_password"
          name="confirm_password"
          register={register}
          required
          type="password"
        />
      </div>
    </div>
  );
};
