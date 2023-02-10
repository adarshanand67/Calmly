// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import Services from "./pages/Services";
import Chakras from "./pages/Chakras";

const Routing = () => (
  <Routes>
    <Route path="/Meditation" element={<Meditation />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Chakras" element={<Chakras />} />
  </Routes>
);

export default Routing;
