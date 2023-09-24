import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter } from 'react-router-dom'
//  import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Counter } from './Counter'
// import './05-useLayoutEffect/Layout'
// import './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import { Padre } from './07-tarea-memo/Padre';
// import { Layout } from './05-useLayoutEffect/Layout'
 import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     {/* <TodoApp/> */}
    <MainApp/>
    {/* <MultipleCustomHooks/> */}
  </BrowserRouter>
  
  // <React.StrictMode>
  // <FormWithCustomHook/>
  // 
  // <Padre/>
  
  // <Layout/>
    // <SimpleForm/>
    // <CounterWhitCustomHook/> 
  //  <Counter/>
  // </React.StrictMode>,
)
