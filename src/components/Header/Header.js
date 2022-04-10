import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import auth from "../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo-img" />
        <ul className="listContainer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory</Link>
          </li>
          <li>
            {!user ? (
              <span>
                <Link to={"/login"}>Login</Link>
                &nbsp;&nbsp;<Link to={"/signup"}>Signup</Link>
              </span>
            ) : (
              <span>
                <button onClick={handleSignOut}>Logout</button>
                <span style={{ marginLeft: "20px" }}>{user.email}</span>
              </span>
            )}
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
