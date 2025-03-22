import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text,color,link,tcolor}) => {
    const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(`${link}`)} style={{ backgroundColor: color,color:tcolor }} className={`w-full font-medium rounded-md p-3 text-md text-center bg-${color}`}>{text}</button>
  )
}

export default Button