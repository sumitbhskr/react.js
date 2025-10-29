import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
     <Card user='Amit' img= "https://plus.unsplash.com/premium_photo-1759672144486-79de6c2317cd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870" />    
     <Card user='Pankaj' img= "https://images.unsplash.com/photo-1758314896569-b3639ee707c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=415"/>    
        
    </div>
  );
};

export default App;
