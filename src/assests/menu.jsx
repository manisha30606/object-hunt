import React from 'react'
import "../App.css"
const menu = () => {
  return (
   <> 
      <div className="menu_container">
        <div className="input_data">
            <h1>Enter Your Name</h1>
            <input type="text" placeholder='Type Here'/>
        </div>
        <button className='btn1'>
            Let's Play
        </button>
        <div className="room_btn">
            <button className='btn2'>
                Create Room
            </button>
            <button className='btn2'>
                Join Room
            </button>
        </div>
    </div>
   </>
  )
}

export default menu;