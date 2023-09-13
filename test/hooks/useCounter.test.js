import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

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
        
        const valor= 100;
        const { result } = renderHook( () => useCounter(valor) );
        const { counter } = result.current;
        expect(counter).toBe(100)
    })
 });
