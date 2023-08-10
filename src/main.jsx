import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook'
import './style.css'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Counter } from './Counter'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FormWithCustomHook/>
    // <SimpleForm/>
    // <CounterWhitCustomHook/> 
  //  <Counter/>
  // </React.StrictMode>,
)
