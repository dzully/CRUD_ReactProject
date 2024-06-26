import { Schema } from "../types/schema.type";
import { CustomInput } from "./custom-input";

type PasswordProps = {
  disabled: boolean;
  register: Schema;
};

export const Password = ({ disabled, register }: PasswordProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="text-sm">
          <a
            href="/forgot-password"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="mt-2">
        <CustomInput
          autoComplete="current-password"
          disabled={disabled}
          id="password"
          name="password"
          register={register}
          required
          type="password"
        />
      </div>
    </div>
  );
};
