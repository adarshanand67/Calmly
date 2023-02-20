import Aos from "aos";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footers from "./components/Footers";
import { default as NavigationBar } from "./components/NavigationBar";
import Routing from "./routes";
import "../node_modules/aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
