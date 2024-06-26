import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeWidget = lazy(() =>
  import("@widgets/home-widget").then(({ HomeWidget }) => ({
    default: HomeWidget,
  }))
);

const SignInWidget = lazy(() =>
  import("@widgets/sign-in-widget").then(({ SignInWidget }) => ({
    default: SignInWidget,
  }))
);

const SignUpWidget = lazy(() =>
  import("@widgets/sign-up-widget").then(({ SignUpWidget }) => ({
    default: SignUpWidget,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInWidget />,
  },
  {
    path: "/home",
    element: <HomeWidget />,
  },
  {
    path: "/sign-up",
    element: <SignUpWidget />,
  },
]);

export const Routes = () => (
  <Suspense fallback={<></>}>
    <RouterProvider router={router} />
  </Suspense>
);
