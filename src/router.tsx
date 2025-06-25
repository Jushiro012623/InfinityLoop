import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/mainLayout";
import HomePage from "@/pages/homePage";
import LoginPage from "./pages/loginPage";
import UpdatePasswordPage from "./pages/updatePasswordPage";
import RegisterPage from "./pages/registerPage";
import ForgotPassword from "./pages/forgotPasswordPage";
import AuthLayout from "./layouts/authLayout";
import Messages from "./pages/messagePage";
import ProfilePage from "./pages/profilepage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "messages", Component: Messages },
      { path: "/profile", Component: ProfilePage },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "update-password", Component: UpdatePasswordPage },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

const Root = () => <RouterProvider router={router} />;

export default Root;
