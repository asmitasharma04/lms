//import { Link, useNavigate, useLocation } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
//import "./Navbar.css";
//
//export default function Navbar() {
//  const { user, logout } = useAuth();
//  const navigate = useNavigate();
//  const location = useLocation();
//
//  const handleLogout = () => {
//    logout();
//    navigate("/login");
//  };
//
//  // Show Login/Register only on login or register page
//  const showAuthLinks = !user && (location.pathname === "/login" || location.pathname === "/register");
//
//  return (
//    <nav className="navbar">
//      <div className="nav-left">
//        <Link to="/" className="nav-logo">LMS</Link>
//      </div>
//      <div className="nav-right">
//        {showAuthLinks && (
//          <>
//            <Link to="/login" className="nav-link">Login</Link>
//            <Link to="/register" className="nav-link">Register</Link>
//          </>
//        )}
//
//        {user && (
//          <>
//            <span className="nav-user">Hello, {user.username}</span>
//            <button onClick={handleLogout} className="nav-btn">Logout</button>
//          </>
//        )}
//      </div>
//    </nav>
//  );
//}
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">LMS</Link>
      </div>
      <div className="nav-right">
        {!user && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}

        {user && (
          <>
            <span className="nav-user">Hello, {user.username}</span>
            <button onClick={handleLogout} className="nav-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
