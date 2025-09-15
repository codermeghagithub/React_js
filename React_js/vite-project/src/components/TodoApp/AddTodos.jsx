import { useState } from "react";
import React from 'react'

const AddTodos = () => {
  const [title,setTitle]=useState('');
  return (
<>
<input
placeholder="Add Your todo"
value={title}
onChange={e=>SVGTextPositioningElement(e.target.value)} />
<button onClick={()=>{
  setTitle('');
 
}}>Add</button>

</>
  )
}

export default AddTodos