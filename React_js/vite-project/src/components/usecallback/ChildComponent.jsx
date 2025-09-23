import React ,{useEffect} from 'react'

const ChildComponent = ({handleClick}) => {
  useEffect(()=>{
    console.log("Child component useEffect is running... ");
    
  },[handleClick])  // **THIS IS DEPENDENCY ARRAY
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent