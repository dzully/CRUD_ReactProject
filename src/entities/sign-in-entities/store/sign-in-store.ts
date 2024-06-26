import { Session, User } from "@supabase/supabase-js";
import { map } from "nanostores";

export type SignInStoreProps = {
  user: User | null;
  session: Session | null;
};

export const $signInStore = map<SignInStoreProps>({
  user: null,
  session: null,
});

export const updateUserInfo = ({
  user,
  session,
}: {
  user: User | null;
  session: Session | null;
}) => {
  $signInStore.set({
    ...$signInStore.get(),
    user,
    session,
  });
};
