import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BMICalculator from "./components/BMICalculator";
import Footers from "./components/Footers";
import Navbar from "./components/Navbar";
import { default as NavigationBar } from "./components/NavigationBar";
import Routing from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routing />
      </BrowserRouter>
      <Footers />
    </>
  );
}

export default App;
