import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/?page=${ counter }`);
    const { results } = !!data && data;
    
    return (
        <>
            <h1>Rick and Mortys</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />
                 : <Quote results={results} />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}