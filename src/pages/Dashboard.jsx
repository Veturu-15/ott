import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='main'> 
     
  <Link to='/pawankalyana' style={{textDecoration:'none',color:'white'}}>  <div className='powerstar' >
      <h1>power star</h1>
      <img src="https://images.firstpost.com/uploads/2022/09/640363-2022-09-02T104821.363.jpg?im=FitAndFill=(596,336)" alt="" height={"300px"} width={"300px"} />
      </div></Link>
  <Link to='/maheshbabu' style={{textDecoration:'none',color:'white'}}>  <div className='super start'>
      <h1>super star</h1>
      <img src="https://stat5.bollywoodhungama.in/wp-content/uploads/2023/06/Mahesh-Babu-5.jpg" alt=""  height={"300px"} width={"300px"}/>
    </div></Link>
   <Link to='/prabhas' style={{textDecoration:'none',color:'white'}}> <div className='Prabhas'>
      <h1>Rebel star</h1>
      <img src="https://live.staticflickr.com/3670/9005345962_0aca5e3950_z.jpg" alt="" />
    </div></Link>
  <Link to='/ntr' style={{textDecoration:'none',color:'white'}}>  <div>
      <h1>Man of Mass</h1>
      <img src="https://i.pinimg.com/736x/47/8b/63/478b638ed6fd928401c0b39cf05e3b4e.jpg" alt="" />
    </div></Link>
   <Link to='/nani' style={{textDecoration:'none',color:'white'}}> <div>
      <h1>Natural star</h1>
      <img src="https://w0.peakpx.com/wallpaper/0/493/HD-wallpaper-nani-diwali-natural-star-tollywood.jpg" alt="" />
    </div></Link>
    </div>
  )
}

export default Dashboard
