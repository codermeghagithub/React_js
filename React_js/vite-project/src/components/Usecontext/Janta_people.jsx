// import React from 'react'

import React, { useContext } from "react";
import Mycontext from "./Context/Mycontext";

const Janta_people = () => {
  // console.log("Janta component",yojna);

  const data = useContext(Mycontext);
  console.log("This data comming from context", data);

  return (
    <div>
      Janta_people
      <h1>{data.yojna.money}</h1>
    <h1>{data.yojna.rashan ?" Rashan is provided ":"Not Povided"} </h1>

    <h1>{data.yojna.penstion}</h1>
    <h1>{data.counter}</h1>
    <button onClick={()=>data.setCounter(data.counter+1)}>Increase</button>
    </div>
  );
};

export default Janta_people;
