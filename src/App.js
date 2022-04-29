import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Navbar from "./components/nav/Navbar";
import SocialMedia from "./global/SocialMedia";
import Footer from "./global/Footer";

function App() {
  return (
    <>
      <Router>
        <Footer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <SocialMedia />
      </Router>
    </>
  );
}

export default App;
