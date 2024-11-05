import React from 'react'
import { Link } from 'react-router-dom'
function Das() {
  return (
    <div className='Hindi'>
      <Link to='/shah' style={{textDecoration:'none',color:'white'}}>  <div> <br />
      <h1 >Khan</h1>
      <img src="https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_.jpg" alt="" />
    </div></Link>
  <Link to='/amit'style={{textDecoration:'none',color:'white'}} > <div> <br />
        <h1>Amit</h1>
        <img src="https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg" alt="" />
    </div></Link> 
   <Link to='/salman' style={{textDecoration:'none',color:'white'}}> <div> <br />
        <h1>Salman</h1>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6u1G7biYFTm_1boDmO0BcE3v-6EZFU1STiqS7cPc_JtyexjNc" alt="" />
    </div></Link>
    </div>
  )
}

export default Das
