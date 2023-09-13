import { useState } from "react"


export const useCounter = ( valor = 1 ) => {
  
    const [counter, setCounter] = useState(valor)

    const increment = (valor) => {

        setCounter( counter + valor );
    };
    const decrement = (valor) => {
        if( counter === 0 )return
        setCounter( counter - valor );   
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
