import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Pagenfound from "./components/pages/Pagenfound";
import "./App.css";
import Diseases from "./components/pages/Diseases.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagenfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;