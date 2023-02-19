import { Button, Navbar } from "flowbite-react";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import favicon from "../../public/assets/favicon.png";

const NavigationBar = () => {
  const headersData = [
    "Home",
    "Meditation",
    "Chakras",
    "Yoga",
    "Quote",
    "About",
    "Issues",
    "Chat",
  ];

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        style={{ backgroundColor: "#CCE4FF" }}
      >
        <Navbar.Brand href="/">
          <img src={favicon} className="mr-3 h-6 sm:h-9" alt="Calmly Logo" />
          <div
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            href="/"
          >
            Calmly
          </div>
        </Navbar.Brand>
        {/* Navbar */}
        <Navbar.Toggle />
        <Navbar.Collapse className="m-0">
          {headersData.map((item) => {
            return (
              <>
                <Link to={`/${item}`} key={uuidv4()}>
                  <button
                    className="rounded py-3 px-2 text-xl font-semibold text-slate-600 hover:cursor-pointer hover:bg-blue-600 hover:text-gray-100"
                    key={uuidv4()}
                  >
                    {item}
                  </button>
                </Link>
              </>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
