import { supabase } from "@app/lib/helpers/supabase";
import { updateUserInfo } from "@entities/sign-in-entities/store/sign-in-store";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routes.enum";

function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleUserAuthentication = async () => {
      const { data } = await supabase.auth.refreshSession();
      const { session, user } = data;

      updateUserInfo({ user, session });
    };

    const checkAuthentication = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (
        (location.pathname === ROUTES.SIGN_IN ||
          location.pathname === ROUTES.SIGN_UP) &&
        user
      ) {
        navigate(ROUTES.SIGN_IN);
      }

      const shouldNavigateHome =
        [ROUTES.SIGN_IN, ROUTES.SIGN_UP].includes(
          location.pathname as ROUTES
        ) && user;

      if (shouldNavigateHome) {
        navigate(ROUTES.HOME);
      }

      handleUserAuthentication();
      setIsAuthenticated(true);
    };

    checkAuthentication();
  }, [location.pathname, navigate]);

  return isAuthenticated;
}

export const withAuthentication = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuthentication: React.FC = () => {
    const isAuthenticated = useAuthentication();

    return isAuthenticated ? <WrappedComponent /> : null;
  };

  return ComponentWithAuthentication;
};
