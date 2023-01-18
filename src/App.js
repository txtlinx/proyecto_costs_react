import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import Container from "./layaout/Container";
import Navbar from "./layaout/Navbar";
import Footer from "./layaout/Footer";
import NewProject from "./components/pages/NewProject"

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
        <Route exact path="/project" element={<Project />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/company" element={<Company />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route exact path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
