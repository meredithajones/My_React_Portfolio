import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Project from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const title = "Meredith Jones Portfolio";

  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Project} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/resume" component={Resume} /> 
      <Footer />
    </div>
  </Router>
  
);
}

export default App;
