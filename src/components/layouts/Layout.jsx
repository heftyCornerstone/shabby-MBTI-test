import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='mt-10 flex flex-col items-center'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
