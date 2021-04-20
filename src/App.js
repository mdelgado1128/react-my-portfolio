import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component ={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
