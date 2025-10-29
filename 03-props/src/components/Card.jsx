import React from 'react'

const Card = (props) => {

  return (
    <div>
       <div className="card">
        <img
          src={props.img} alt="Profile"/>
        <h1>{props.user}</h1>
        <p>Lorem expedita, dolorem  voluptas consequatur!</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
