import React, { useEffect } from 'react'
import { useState,useLayoutEffect } from 'react'
const UseLayOutComponent = () => {
  const [bgColor,setBgcolor]=useState('green')

  useEffect(()=>{
    console.log("useEffect is running ..")
  },[]);

  useLayoutEffect(()=>{
    console.log("useLayoutEffect is running ..")
    document.body.style.backgroundColor=bgColor
  },[bgColor])
  const toggleColor=()=>{
    setBgcolor(prevcolor=>(prevColor==='green'?'teal':'green'))
  }
  return (
    <div>UseLayOutComponent
    <button onClick={toggleColor}>ChangeColor</button>
    </div>
  )
}

export default UseLayOutComponent