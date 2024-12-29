import MenuItems from "./menuItems";
import ViewMenu from "../viewMenu/viewMenu";
import Sidebar from "../sidebar/sidebar";
import Dashboard from "../dashboard/Dashboard";
export default function CreateMenu() {
  return (
    <>
      <Sidebar />
      <MenuItems />
      <ViewMenu />
      <Dashboard />
    </>
  );
}
