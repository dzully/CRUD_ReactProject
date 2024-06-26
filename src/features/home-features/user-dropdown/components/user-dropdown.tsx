import { supabase } from "@app/lib/helpers/supabase";
import { $signInStore } from "@entities/sign-in-entities/store/sign-in-store";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import { useNavigate } from "react-router-dom";

const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const UserDropdown = () => {
  const { user } = useStore($signInStore);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleUserNavigation = (param: string) => () => {
    if (param === "Sign out") {
      handleSignOut();
    }
  };

  return (
    <div className="ml-4 flex items-center md:ml-6">
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <div className="rounded-full bg-[black] w-8 h-8 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user?.email?.[0].toUpperCase()}
              </span>
            </div>
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              {({ focus }) => (
                <button
                  onClick={handleUserNavigation(item.name)}
                  className={`w-full text-left ${classNames(
                    focus ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}`}
                >
                  {item.name}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
