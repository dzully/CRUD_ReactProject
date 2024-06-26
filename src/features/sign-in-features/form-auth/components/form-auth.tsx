import { supabase } from "@app/lib/helpers/supabase";
import { updateUserInfo } from "@entities/sign-in-entities/store/sign-in-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { Email } from "./email";
import { Password } from "./password";
import { Submission } from "./submission";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: submission.email,
      password: submission.password,
    });

    setLoading(false);
    if (error) return;
    if (data) {
      updateUserInfo({
        user: data.user,
        session: data.session,
      });
      navigate("/home");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Email disabled={loading} register={register} />
      <Password disabled={loading} register={register} />
      <Submission loading={loading} />
    </form>
  );
};
