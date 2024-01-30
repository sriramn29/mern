import { Link } from "react-router-dom";


import "../css/Navbar.css";
const NavBar = () => {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <Link  to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link  to="/signup" className="link">
            SignUp
          </Link>
        </li>
        <li>
          <Link  to="/login" className="link">
            Login
          </Link>
        </li>
        
      </ul>
    </div>
  );
};
export default NavBar;
