import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="card">
        
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          alias? Velit fuga expedita nostrum molestiae? Error sequi saepe
          voluptate? Vero sapiente eius animi ratione. Molestiae rerum numquam
          minus magnam fuga.
        </p>
      </div>
      
      
      {Card()}
    </div>
  );
};

export default App;
