import { supabase } from "@app/lib/helpers/supabase";
import { Provider } from "@supabase/supabase-js";
import { ListSocialAuth } from "../lib/helpers/list-social-auth";

export const SocialAuth = () => {
  const handleSignIn = (id: string) => async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: id as Provider,
    });

    console.log({ data, error });
  };

  return (
    <div className="flex flex-row justify-center space-x-[20px]">
      {ListSocialAuth.map((socialAuth) => (
        <div key={socialAuth.id} className="mb-2">
          <button
            type="button"
            onClick={handleSignIn(socialAuth.id)}
            className="flex gap-2 items-center w-fit h-[40px] justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <img
              src={socialAuth.icon}
              alt={socialAuth.id}
              className="w-4 h-4"
            />
            {socialAuth.name}
          </button>
        </div>
      ))}
    </div>
  );
};
