import { supabase } from "@app/lib/helpers/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { ConfirmPassword } from "./confirm-password";
import { Email } from "./email";
import { Password } from "./password";
import { Submission } from "./submission";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

type Schema = z.infer<typeof schema>;

export const FormAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (submission: Schema) => {
    setLoading(true);
    const { data } = await supabase.auth.signUp({
      email: submission.email,
      password: submission.password,
    });

    setLoading(false);
    if (data) navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Email disabled={loading} register={register} />
      <Password disabled={loading} register={register} />
      <ConfirmPassword disabled={loading} register={register} />
      <Submission loading={loading} />
    </form>
  );
};
