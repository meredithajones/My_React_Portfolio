import React from "react";
import './App.css';
import Navbar from './Components/Header/Header.jsx';
import Header from './Components/Header/Header';
import Footer from "./components/Footer";
import Introduction from './Cards/Introduction';
import Portfolio from "./Cards/Portfolio";
import Resume from "./Cards/Resume";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  const title = "Meredith Jones Portfolio";

  return (
    <div className="App">
      {/* Nesting the navbar */}
      <Navbar />
     <div className = "content">
       <h1> { title }</h1> </div>
       
      {/* Setting up router for intro, portfolio, resume, & photo */}
   <Router>
   <>
     <Header />
     <Switch>
         <Route exact path="/">
           <Introduction />
         </Route>
         <Route path="/portfolio">
           <Portfolio />
         </Route>
         <Route path="/resume">
           <Resume />
         </Route>
       </Switch>
     <Footer />
   </>
   </Router>
   </div>
 );
}

export default App;
