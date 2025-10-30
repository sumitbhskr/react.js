import React from 'react'

const App = () => {


const submitHander = (e)=>{
  e.preventDefault()
  console.log('form Submitted');
}

  return (
    <div>
    <form onSubmit={(e) => {
      submitHander(e)
    }}>
      <input type="text" placeholder='Enter your name' />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App

