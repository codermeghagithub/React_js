import React, { useState ,useMemo} from 'react'

const UsemoemoComponent = () => {

  const [inputvalue,setInputValue]=useState(" ")
  const calculateResult=(input)=>{
console.log("calculate Result.....");
return input.length*100;
  }

  const memorizedResult=useMemo(()=>calculateResult(inputvalue),[inputvalue])
  return (
    <div>UsemoemoComponent
    <input value={inputvalue}
    onChange={(e)=>setInputValue(e.target.value)}
    type="text"/>
    <h1>InputLength={memorizedResult}</h1>
    </div>
  )
}

export default UsemoemoComponent