// import React, { useEffect ,useState} from 'react'   //**useEffect works together with useState: */

// const UseEffectComponent = () => {

//   const [count, setCount] = useState(0)  //**write USestateSnnipet htis syntax will automatically come  */

//   useEffect(()=>{
//     console.log("UseEffect is Running")
//     document.title=count;  // **document.title = count; → updates the browser tab’s title with the current value of count.
//   },[count])  // ** if WE DO NOT PASS ANY VALUE OR DATA WITHIN THIS ARRAY USEEFFECT DOES NOT WORK 

//   return (
//     <div>UseEffectComponent
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
// }

// export default UseEffectComponent
















// ** for data fetch from  jsonplaceholder

import React, { useEffect ,useState} from 'react'

const UseEffectComponent = () => {

  const [count, setCount] = useState(0)  //**write USestateSnnipet htis syntax will automatically come  */

  useEffect(()=>{

    const fatchData=async()=>{
     const api=await fetch('https://jsonplaceholder.typicode.com/todos');
     const result =await api.json();
    //  console.log(result)
    console.table(result)
    };
     fatchData();
},[]);
     // ** if WE DO NOT PASS ANY VALUE OR DATA WITHIN THIS ARRAY USEEFFECT DOES NOT WORK 

  return (
    <div>UseEffectComponent
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectComponent