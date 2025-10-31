import React from 'react'

const App = () => {

  // localStorage.setItem('user', 'sumit')
 
  // const user = localStorage.getItem('user')
  // console.log(user);
  // localStorage.removeItem(user)


  ///second =>

//   const user = {
//     username:'sumit',
//     age:18,
//     city:'pilani'
//   }

//  localStorage.setItem('user', JSON.stringify(user))

// and console k liy =>
  const user = JSON.parse(localStorage.getItem('user'))
console.log(user);


  return (
    <div>
      App
    </div>
  )
}

export default App
