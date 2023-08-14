import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Color({colorName}) {
  const navigate = useNavigate();
  const {color} = useParams();
  const findColor = colorName.find((cname)=> cname.name === color);
  
  useEffect(()=>{
    if(!findColor.name){
      navigate("/")
    }
  },[color, findColor, navigate])

  return (
    <div className='color-background text-center' style={{backgroundColor:`${findColor.color}`}}>
      <div className='main'>
      <h1 className='text-uppercase'>THIS IS {findColor.name}</h1>
      <h1>ISN'T IT BEAUTIFUL?</h1>
      <button onClick={()=>navigate("/")} type='button' className='btn btn-large btn-info fw-bold' style={{width: "200px"}}>GO BACK</button>
      </div>
    </div>
  )
}

export default Color