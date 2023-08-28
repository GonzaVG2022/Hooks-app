import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "./"



export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter()
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/?page=${ counter }`)
    
    // console.log({data, isLoading, hasError})

     const  { results }  = !!data && data
      
    return (
    <>
    <h1>Rick and Morty</h1>
    <hr />
    {
        isLoading 
        ? <LoadingQuote/>
        : <Quote results={results} />
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
