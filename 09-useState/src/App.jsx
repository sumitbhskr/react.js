// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(20);
//   const [username, setUsername] = useState('Sumit')
//   const [users, setUsers] = useState([10, 20, 30])

//    function changeA(){
//     setA(13)
//     setUsername('Amit')
//     setUsers([40, 50 ,60])
//    }

//   return (
//     <div>
//       <h1>Value of a is {a} <br />{users}<br />
//       values of user is {username}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//  const [num, setNum] = useState(0)

//   function increaseNum(){
//  setNum(num+1)
//   }

//  function decreaseNum(){
//     setNum(num-1)
//   }

//  function jump5Num(){
//     setNum(num+5)
//   }

//  function jump10Num(){
//     setNum(num-5)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={jump5Num}>increase by 5</button>
//       <button onClick={jump10Num}>decrease by 5</button>
//     </div>
//   )
// }

// export default App


// advanced => usestate 

import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Sumit", age: 20 });

  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = "Amit";
     newNum.age = 22
    setNum(newNum);
  };

  return (
    <div>
      <h1>
        {num.user}, {num.age}
      </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
