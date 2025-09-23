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
import UseCallbackComponent from './components/usecallback/UseCallbackComponent'
import UsemoemoComponent from './components/Usememo/UsemoemoComponent'
import Test from './components/Custom_hook/Test'
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
    {/* <Scrolling_img/> */}
    {/* <UseCallbackComponent/> */}
    {/* <UsemoemoComponent/> */}
    <Test/>
    </MoneyState>
  )
}

export default App


