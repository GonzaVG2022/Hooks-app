import { useCounter } from "./hooks/useCounter"


export const HooksApp = () => {
  const valor = 0
  const {counter, increment,decrement, reset} = useCounter( valor )
  return (
    <>
    <h1>{counter}</h1>
    <button className="btn btn-primary" onClick={ () => increment(2) }>+</button>
    <button className="btn btn-primary" onClick={ () => decrement(2) }>-</button>
    <button className="btn btn-primary" onClick={ reset }>reset</button>
    
    </>
  )
}
