import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Page-specific content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>

      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;
