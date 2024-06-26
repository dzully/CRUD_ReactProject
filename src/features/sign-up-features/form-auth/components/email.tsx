import { Schema } from "../types/schema.type";
import { CustomInput } from "./custom-input";

type EmailProps = {
  disabled: boolean;
  register: Schema;
};

export const Email = ({ disabled, register }: EmailProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="mt-2">
        <CustomInput
          autoComplete="email"
          disabled={disabled}
          id="email"
          name="email"
          register={register}
          required
          type="email"
        />
      </div>
    </div>
  );
};
