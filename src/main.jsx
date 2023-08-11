import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Counter } from './Counter'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <FormWithCustomHook/>
  <MultipleCustomHooks/>
    // <SimpleForm/>
    // <CounterWhitCustomHook/> 
  //  <Counter/>
  // </React.StrictMode>,
)
