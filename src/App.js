import React from "react";
import './App.css';
import Navbar from './Components/Header/Header.jsx';
import Card from './Components/Project/Project'


function App() {
  const title = "Meredith Jones Portfolio";

  return (
    <div className="App">
      {/* Nesting the navbar */}
      <Navbar />
     <div className = "content">
       <h1> { title }</h1>
       </div>  
      <div className="Card">
        <Card />
      </div>
        
      
    </div>
  );
}

export default App;
