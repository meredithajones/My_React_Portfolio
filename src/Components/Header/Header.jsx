import reactDom from "react-dom";
import React from "react";

const Navbar = () => {
    return ( 
       <nav className = "navbar">
           <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" />
            <h2>Meredith Jones Portfolio</h2>
                <div className = "links">
               <a href = "/src/Cards/Introduction.jsx">Introduction</a>
               <a href = "/src/Cards/Portfolio.jsx">Portfolio</a>
               <a href = "/src/Cards/Resume.jsx">Resume</a>
               <a href = "/src/Cards/Contact.jsx">Contact</a>
           </div>
       </nav> 
     );
}
 
export default Navbar;