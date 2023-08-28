import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
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




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <FormWithCustomHook/>
  // <MultipleCustomHooks/>
  // <Padre/>
  <TodoApp/>
  // <Layout/>
    // <SimpleForm/>
    // <CounterWhitCustomHook/> 
  //  <Counter/>
  // </React.StrictMode>,
)
