import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../public/assets/favicon.png";

const Navbar = () => {
  const headersData = ["Home", "Meditation", "Chakras", "Yoga", "About"];
  return (
    <nav className="flex items-center justify-between bg-base-100 p-6">
      <div className="flex items-center">
        <a className="btn-ghost btn m-0 text-xl normal-case" href="/Home">
          <img src={favicon} alt="logo" className="w-16" />
          <span className="mx-2 py-2">Calmly</span>
        </a>
      </div>
      <div className="block sm:hidden">
        <button className="btn-toggle">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden sm:block">
        <ul className="menu menu-horizontal px-1">
          {headersData.map((item) => {
            return (
              <li key={item} className="m-0 p-0 font-semibold">
                {/* <Link to={`/${item}`} className="px-4 text-xl">
                  {item}
                </Link> */}
                <a href={`/${item}`} className="px-4 text-xl">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
