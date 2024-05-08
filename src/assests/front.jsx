import React from 'react'
import "../App.css"
// import menu from './menu'
import { Link } from 'react-router-dom'
const front = () => {
  return (
   <>
    <section className="start">
        <Link to="/room"><button className='btn1'>
            Play As Guest
        </button></Link>
        <button className='btn2'>
            How to Play
        </button>
    </section>
   </>
  )
}

export default front;