import { Alert } from "flowbite-react";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Routes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
