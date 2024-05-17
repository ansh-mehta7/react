import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  let [loginfo, setloginfo] = useState("login");
  
  
  useEffect(() => {
    
  },[loginfo]);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li >
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            loginfo === "login" ? setloginfo("logout") : setloginfo("login");
          }}
        >
          {loginfo}
        </button>
      </div>
    </div>
  );
};
export default Header;
