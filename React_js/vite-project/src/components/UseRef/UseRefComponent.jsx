import React from 'react'
import {useRef} from 'react'
const UseRefComponent = () => {


  const myref=useRef(null); //** myref is obj  */
  console.log(myref);

  const focusInput=()=>{
    myref.current.focus();  //here through current we access html  input
  }
  return (
    <div>
<input 
ref={myref}
 type="text"/>
<button onClick={focusInput} >Focus</button>
    </div>
  )
}

export default UseRefComponent