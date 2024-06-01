import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginfo, setloginfo] = useState("login");
  const onlinecheck = useOnlineStatus();

  return (
    <div className="flex justify-between bg-yellow-100 m-2 sm:bg-yellow-600">
      <div className="">
        <img className=" w-32 m-10  " src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex justify-between items-center ">
        <ul className="flex p-4 m-7 gap-5">
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="font-bold">Cart</li>
          <li className="font-thin">
            {onlinecheck ? "ONLINE🟩" : "OFFLINE 🛑"}
          </li>
          <button
            className="px-2 py-1 bg-yellow-200 border-black rounded-lg"
            onClick={() => {
              setloginfo(loginfo === "login" ? "logout" : "login");
            }}
          >
            {loginfo}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
