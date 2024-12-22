import { useContext } from "react";
import { PostContext } from "../store/post-context";
import MenuItems from "./menuItems";
import ViewMenu from "../viewMenu/viewMenu";
import Dashboard from "../dashboard/Dashboard";
export default function CreateMenu() {
  const { displayMenu } = useContext(PostContext);
  if (displayMenu === "Create") {
    return <MenuItems />;
  } else if (displayMenu === "View") {
    return <ViewMenu />;
  } else if (displayMenu === "DashBoard") {
    return <Dashboard />;
  }
}
