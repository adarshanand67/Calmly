// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import About from "./pages/About";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import Chakras from "./pages/Chakras";
import Yoga from "./pages/Yoga";
const Routing = () => (
  <Routes>
    <Route path="/Meditation" element={<Meditation />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Chakras" element={<Chakras />} />
    <Route path="/Yoga" element={<Yoga />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Routing;
