import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
      </div>
    </div>
  );
};
export default Header;
