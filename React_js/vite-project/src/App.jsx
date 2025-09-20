import React, { useEffect } from 'react'
import UseStateComponent from './components/UseState/UseStateComponent'
import UseReducerComponent from './components/UseReducer/UseReducerComponent'
import UseEffectComponent from './components/UseEffect/USeEffectComponent'
 import UseRefComponent from "./components/UseRef/UseRefComponent"
import IndianGoverment from './components/Usecontext/IndianGoverment';
import MoneyState from './components/Usecontext/Context/MoneyState'
import UseLayOutComponent from './components/useLayout/useLayOutComponent'
import IncreamentComponent from './components/UseReducer/IncreamentComponent'
import Scrolling_img from './components/UseRef/Scrolling_img'
const App = () => {
  return (
    <MoneyState >
    {/* <UseStateComponent/> */}
    {/* <UseReducerComponent/> */}
    {/* <UseEffectComponent/> */}
    {/* <UseRefComponent/> */}
    {/* <IndianGoverment/> */}
    {/* <UseLayOutComponent/>  */}
    {/* <IncreamentComponent/> */}
    <Scrolling_img/>
    </MoneyState>
  )
}

export default App


