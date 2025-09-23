import React,{useCallback, useState} from 'react'
import ChildComponent from './ChildComponent';
const UseCallbackComponent = () => {
  const [counter1,setCounter1]=useState(0)
  const [counter2,setCounter2]=useState(1);
  // ** handleClick increase counter 1. SO EXCEPT handleClick ALL ARE INCREASE COUNTER2
  // const handleClick=()=>setCounter1(counter1+1);
const handleClick=useCallback(()=>setCounter1(counter1+1),[counter1])  //**now child component does not repettedly run */
 
 
  return (
    <div>UseCallbackComponent
    {/* he increase counter 2 */}
    <h1>Counter_2={counter2}</h1>
    
    {/* // **add chicldcomponent file */}
<ChildComponent handleClick={handleClick} /> 
    <button onClick={()=>setCounter2(counter2+1)}>counter2_Increase</button>


    </div>
  )
}


export default UseCallbackComponent