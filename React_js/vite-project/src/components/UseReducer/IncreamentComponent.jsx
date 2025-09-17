import React, { useReducer } from 'react'
import './IncreamentComponent.css'
import { useState } from 'react'
const IncreamentComponent = () => {

  const counteReducer=(state,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return {count:state.count+1};
      case 'INCREMENT_5':
          return {count:state.count+5}
      case 'DECREMENT':
        return {count:state.count-1};
      case 'DECREMENT_5':
        return {count:state.count-5}
        default:
          return state;    
    }
  }

  // ** state → Holds the current state (initially { age: 42 }).

// *dispatch → A function we call when we want to update the state.
  const[state,dispatch]=useReducer(counteReducer,{count:0})
  return (

<div className="button-group">  
  <h1>{state.count}</h1>
  <div className="increment-buttons">

      <button onClick={() => 
        dispatch({ type: 'INCREMENT' })
      }>Increase by 1</button>

      <button onClick={()=>dispatch({type:'INCREMENT_5'})}>Increament by 5</button>
</div>
  <div className="decrement-buttons">
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement by 1</button>

  <button onClick={()=>dispatch({type:'DECREMENT_5'})}>Decrement by 5</button>
</div>
  <p>
  I give you  {state.count} Points.</p>
    </div>
  )
}

export default IncreamentComponent