import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export const Header = () => {
  let [loginfo, setloginfo] = useState("login");
  

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Menu</li>
          <li>Specials</li>
          <li>Reservations</li>
          <li>About Us</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            loginfo==="login" ? setloginfo("logout") : setloginfo("login");
          }}
        >
          {loginfo}
        </button>
      </div>
    </div>
  );
};
export default Header;
