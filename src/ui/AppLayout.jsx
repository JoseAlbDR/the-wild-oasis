import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
function AppLayout() {
  return (
    <div>
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
