import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/mainLayout";
import HomePage from "@/pages/homePage";
import LoginPage from "./pages/loginPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: HomePage }],
  },
  { path: "/login", Component: LoginPage },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

const Root = () => <RouterProvider router={router} />;

export default Root;
