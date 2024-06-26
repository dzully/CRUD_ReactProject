import { ListSocialAuthType } from "../../types/list-social-auth.type";

export const ListSocialAuth: ListSocialAuthType[] = [
  {
    id: "google",
    name: "Google",
    icon: "https://supabase.com/docs/img/icons/google-icon.svg",
    color: "bg-white",
    hoverColor: "hover:bg-gray-100",
    focusColor: "focus-visible:outline-indigo-600",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "https://supabase.com/docs/img/icons/facebook-icon.svg",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    focusColor: "focus-visible:outline-blue-600",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "https://supabase.com/docs/img/icons/twitter-icon-light.svg",
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
    focusColor: "focus-visible:outline-blue-600",
  },
  {
    id: "discord",
    name: "Discord",
    icon: "https://supabase.com/docs/img/icons/discord-icon.svg",
    color: "bg-indigo-600",
    hoverColor: "hover:bg-indigo-700",
    focusColor: "focus-visible:outline-indigo-600",
  },
];
