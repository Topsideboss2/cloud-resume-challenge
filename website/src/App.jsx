import "./index.css";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Tech,
  Navbar,
  Hero,
  Contact,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="w-[100vw] ">
        <Navbar className="" />
        <div className="relative z-0 bg-primary bg-cover bg-no-repeat bg-center ">
          <StarsCanvas />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        <div className="relative z-0 bg-black-100">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
