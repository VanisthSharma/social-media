import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ViewMenu from "./viewMenu/viewMenu.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import BodyItems from "./BodyItems.jsx";
import App from "./App.jsx";
import MenuItems from "./createMenu/menuItems.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyItems />,
        children: [
          { path: "create", element: <MenuItems /> },
          {
            path: "/",
            element: <ViewMenu />,
          },
          {
            path: "posts",
            element: <ViewMenu />,
          },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
