import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../public/assets/favicon.png";

const Navbar = () => {
  const headersData = ["Home", "Meditation", "Chakras", "Yoga", "About"];
  return (
    // <nav className="flex items-center justify-between p-2">
    //   <div className="flex items-center">
    //     <a className="btn-ghost btn m-0 text-xl normal-case" href="/Home">
    //       <img src={favicon} alt="logo" className="w-16" />
    //       <span className="mx-2 py-2">Calmly</span>
    //     </a>
    //   </div>
    //   <div className="block sm:hidden">
    //     <button className="btn-toggle">
    //       <svg
    //         className="h-6 w-6 fill-current"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>
    //   </div>
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={favicon} className="mr-3 h-6 sm:h-9" alt="Calmly Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Calmly
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden sm:block">
          <ul className="menu menu-horizontal px-1">
            {headersData.map((item) => {
              return (
                <li key={item} className="m-0 p-0 font-semibold">
                  <Link to={`/${item}`}>{item}</Link>
                  {/* <a href={`/${item}`} className="px-4 text-xl">
                  {item}
                </a> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
