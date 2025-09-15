// import React, { useState } from 'react'
// // ** We  CAN NOT DIRECTLY CHANGE VARIABLE MEAND INCREASE DECREASE  IT ONLY REFLECT ON CONSOLE NOT REFLECT ON UI IN REACT . SO THAT'S WHY WE USE USESTATE .

// const UseStateComponent = () => {
//   const[counter_box,setcounter]=useState(0)

//   const increase=()=>{
//     setcounter(counter_box+1)
//     // counter_box++
//     console.log(counter_box)
//   }

//   const decrease=()=>{
//     setcounter(counter_box-1)
//     console.log(counter_box)
//   }

//   return (
//     <div>
// <h1>{counter_box}</h1>
// <button onClick={increase}>Increase</button>
// <button onClick={decrease}>Decrease</button>

//     </div>
//   )
// }

// export default UseStateComponent

import { useState } from "react";

const UseStateComponent = () => {
  const[age,setAge]=useState(22)

  const increaseBy1=()=>{
   setAge(age+1)
   console.log(age);
   }

   const increaseBy3=()=>{
    setAge(age+3)
    console.log(age);
    
   }
  return (
    <div>UseStateComponent
    <h1>My age:{age}</h1>
    <button onClick={increaseBy1}>Increse 1</button>
    <button onClick={increaseBy3}>Increse 3</button>
    </div>
  )
}

export default UseStateComponent