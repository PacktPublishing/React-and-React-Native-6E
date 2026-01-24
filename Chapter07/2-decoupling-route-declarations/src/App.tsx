import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import routeOne from "./one";
import routeTwo from "./two";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Nesting Routes</h1>,
      },
      routeOne,
      routeTwo,
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
