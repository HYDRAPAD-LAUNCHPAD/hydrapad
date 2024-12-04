import Header from "@/layout/header";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default Layout;
