import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;