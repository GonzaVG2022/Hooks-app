import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "./"



export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter()
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/?page=${ counter }`)
    
    const   {results}   = !!data && data
    console.log(results)
    const {image, name} = !!results && results[0]
    
    return (
    <>
    <h1>Rick and Morty</h1>
    <hr />
    {
        isLoading 
        ? <LoadingQuote/>
        : <Quote 
            image = {image}
            name = {name}
          />
    }
    
    <button className="btn btn-primary"
            disabled= { isLoading }
            onClick={ () => increment(1) }
    >
        Next Image
    </button>

    </>
  )
}
