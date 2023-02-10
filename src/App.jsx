import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footers from "./components/Footers";
import Navbar from "./components/Navbar";
import Routing from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Footers/>
    </>
  );
}

export default App;
