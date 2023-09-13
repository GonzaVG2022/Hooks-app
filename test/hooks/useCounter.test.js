import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useConter', () => { 
    test('debe retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter() );
        // console.log( result )
        const { counter, increment, decrement, reset } = result.current;

        expect ( counter ).toBe( 1 );
        expect ( decrement ).toEqual( expect.any( Function ) );
        expect ( increment ).toEqual( expect.any( Function ) );
        expect ( reset ).toEqual( expect.any( Function ) );
     });

    test('debe generar el counter con el valor de 100', () => {
        
        const valor = 100;
        const { result } = renderHook( () => useCounter(valor) );
        const { counter } = result.current;
        expect(counter).toBe(100)
    });

    
    test('debe de decrementar el counter', () => { 
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act( () => {
            decrement();
            // decrement(3);
        } );

        expect( result.current.counter ).toBe( 0 )


     });

     test('debe de reset el counter', () => { 
        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
            
        } );

        expect( result.current.counter ).toBe( 1 )


     });
 });
