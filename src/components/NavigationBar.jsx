import { Button, Navbar } from "flowbite-react";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import favicon from "../../public/assets/favicon.png";

const NavigationBar = () => {
  const headersData = ["Home", "Meditation", "Chakras", "Yoga", "About", "Donate"];

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
        <Navbar.Collapse>
          {headersData.map((item) => {
            return (
              <li
                key={item}
                className="m-0 inline-block rounded py-3 px-3 text-xl font-semibold text-slate-600 hover:cursor-pointer hover:bg-blue-600 hover:text-gray-100"
              >
                <Link to={`/${item}`}>{item}</Link>
              </li>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
