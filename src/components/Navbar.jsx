import React from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.png";
const Navbar = () => {
  const headersData = ["Home", "About", "Contact", "Services", "Meditation", "Chakras"];
  const nestedData = ["Dashboard", "Profile", "Settings", "Logout"];
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={favicon} alt="logo" className="logo" width={50} />
        <a
          className="btn-ghost btn text-xl normal-case"
          href="#"
        >
          Calmly
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {headersData.map((item) => {
            return (
              <li key={item}>
                <a href={`${item}`}>{item}</a>
                {/* <Link to={`/${item}`}>{item}</Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
