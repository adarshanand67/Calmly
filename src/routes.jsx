// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

const Routes = () => (
  <Routes>
    <Route exact path="/" component={Alert} />
    
  </Routes>
);

export default Routes;
