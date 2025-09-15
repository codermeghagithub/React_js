// ** It also work like Usestate but when we do colex program that time we use UseReduce instead of  Usestate

import React, { useReducer } from 'react'

const UseReducerComponent = () => {

  const countReducer=(state,action)=>{   //** here state means count=0 */
    switch(action.type){  //  **it can aluse here if else 
      case "Increament":
        return {count:state.count+1};

        case "Decreament":
          return {count:state.count-1};
          default :
          state;
    }
  }
  const [state, dispatch] = useReducer(countReducer,{count:0})  // **useReducerSnippet it automatically give syntax
  return (
    <div>UseReducerComponent
    
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type:"Increament"})}>Increament</button>
<button onClick={()=>dispatch({type:"Decreament"})}>Decreament</button>

    </div>
  )
}

export default UseReducerComponent