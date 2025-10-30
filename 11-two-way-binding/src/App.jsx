import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

const submitHander = (e)=>{
  e.preventDefault()
  console.log('form Submitted by', title);
  setTitle('')
}


  return (
    <div>
    <form onSubmit={(e) => {
      submitHander(e)
    }}>
      <input type="text"
       placeholder='Enter your name'
       value={title} 
      onChange={(e)=>{

        console.log(e.target.value);
      }}
      />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App

