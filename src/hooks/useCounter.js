import { useState } from "react"


export const useCounter = ( valor = 1 ) => {
  
    const [counter, setCounter] = useState(valor)

    const increment = (valor = 1) => {

        setCounter( (current) =>  current + valor );
    };
    const decrement = (valor = 1) => {
        if( counter === 0 )return
        setCounter( (current) =>  current - valor );   
    }
    const reset = () => {

       setCounter( valor ) ;
    }
  
  return (
    {
        counter,
        increment,
        decrement,
        reset
    }
  )
}
