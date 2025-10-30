import React from "react";

const App = () => {
  // function btnClicked(){
  //   console.log('button is clicked');
  // }

  return (
    <div>
      {/* <h1>Hello, Sumit</h1> */}
      {/* <button onClick={btnClicked}>Click here</button>
      <button onClick={btnClicked()}>explore this</button> */}

      {/* <button onClick={function(){
        console.log('hello guys');
      }}>Click here</button> */}
      {/* 
      <input
        onChange={function (elem) {
          console.log(elem); //(elem.target) ya jo type kr rhe ho chay to (elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      /> */}



      {/* <div onMouseMove={(elem) => {
        console.log(elem.clientX);
      }} 
      className="box">       
      </div> */}

      <div>
        <div className="page1" ></div>
        <div className="page2" ></div>
        <div className="page3" ></div>
      
        
       
      </div>
    </div>
  );
};

export default App;
