import React from 'react'
import { Link } from 'react-router-dom'

function Home({colorName}) {



  return (
   <>
     <div className='text-center navbar'>
        <h2 className='fw-bold text-white'>Welcome to the color factory</h2>
        <button type="button" className="btn btn-link text-white" style={{width: "200px", fontSize: 30}}><Link to="/new">Add a color</Link></button>
    </div>
    <div className='container'>
        <p className='text-center mt-2 fw-bold'>Please Select The Color</p>
        <div className='text-center'>
         {
          colorName.map((color)=>(
            <ul key={color.id}>
              <li className='list-unstyled'><Link to={`/colors/${color.name}`} className='fw-bolder text-info color-list'>{color.name}</Link></li>
           </ul>
          ))
         }
        </div>
    </div>
   </>
  )
}

export default Home