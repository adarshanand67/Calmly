// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Quote from "./components/Quote";
import About from "./pages/About";
import Chakras from "./pages/Chakras";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import Yoga from "./pages/Yoga";
const Routing = () => (
  <Routes>
    <Route path="/Meditation" element={<Meditation />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Chakras" element={<Chakras />} />
    <Route path="/Yoga" element={<Yoga />} />
    <Route path="/Donate" element={<Donate />} />
    <Route path="/Quote" element={<Quote />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Routing;
