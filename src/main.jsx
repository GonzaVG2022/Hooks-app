import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { HooksApp } from './HooksApp'
// import { Counter } from './Counter'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HooksApp/>
   {/* <Counter/> */}
  </React.StrictMode>,
)
