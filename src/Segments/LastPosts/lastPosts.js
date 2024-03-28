import React from 'react'
import Card from '../../Components/Card/card'
import './lastPosts.css'

const LastPosts = () => {
  return (
    <div className='card-main-container'>
      <div className='card-container-title'>
        <h1>Our Last Posts</h1>
      </div>
      <div className='card-container'>
      <Card />
      </div>
        
    </div>
  )
}

export default LastPosts