import React from 'react'

const Cards = (props) => {
  console.log(props);
  
  return (
    <div>
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <h6>{props.age}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, alias!</p>
        <button>View Profile</button>

      </div>
    
    </div>
  )
}

export default Cards
