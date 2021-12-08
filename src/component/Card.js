// Funtional Component

//My card component
import React from 'react'


const Card = (props) => {
    return (
      <article className='article' style={{ backgroundColor: props.bg_color }}>
        <div>
          <img src={props.logo} alt='logo' />
        </div>
        <div className='text'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div>
          <button className='btn-1 btn-2 '>Learn More</button>
        </div>
      </article>
    )
}

export default Card
