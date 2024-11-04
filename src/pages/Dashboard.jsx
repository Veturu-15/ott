import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='main'> 
     
  <Link to='/pawankalyana'>  <div className='power star'>
      <h1>power start</h1>
      <img src="https://images.firstpost.com/uploads/2022/09/640363-2022-09-02T104821.363.jpg?im=FitAndFill=(596,336)" alt="" height={"300px"} width={"300px"} />
      </div></Link>
  <Link to='/maheshbabu'>  <div className='super start'>
      <h1>super start</h1>
      <img src="https://stat5.bollywoodhungama.in/wp-content/uploads/2023/06/Mahesh-Babu-5.jpg" alt=""  height={"300px"} width={"300px"}/>
    </div></Link>
   <Link to='/prabhas'> <div className='Prabhas'>
      <h1>Rebel start</h1>
      <img src="https://live.staticflickr.com/3670/9005345962_0aca5e3950_z.jpg" alt="" />
    </div></Link>
    </div>
  )
}

export default Dashboard
