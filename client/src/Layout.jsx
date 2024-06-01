import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="bg-gray-200 text-gray-600 px-3 sm:px-8 md:px-12">
      <Header />
      <div className=" min-h-[100vh] flex justify-center items-center py-3 sm:py-8 md:py-12 pt-0 sm:pt-0 md:pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
