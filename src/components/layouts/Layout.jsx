import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='mt-10'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
