import Mycontext from "./Mycontext";

import React, { useState } from 'react'

const MoneyState = (props) => {
  const yojna={
    money:4000,
    rashan:false,
    penstion:500
  };
  const [counter, setCounter] = useState(0)
  return (
    <Mycontext.Provider value=
    {{
      yojna,counter, setCounter,
      }}>
        
        {props.children}
      </Mycontext.Provider>
  )
}

export default MoneyState