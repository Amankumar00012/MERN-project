
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">AddProduct</Link></li>
          <li><Link to="update">UpdateProduct</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;