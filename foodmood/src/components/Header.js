import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginfo, setloginfo] = useState("login");
  const onlinecheck = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li>Cart</li>
          <li>{onlinecheck ? "ONLINE🟩" : "OFFLINE 🛑"}</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            setloginfo(loginfo === "login" ? "logout" : "login");
          }}
        >
          {loginfo}
        </button>
      </div>
    </div>
  );
};

export default Header;
