import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock('../../src/hooks/useFetch')
describe('Pruebas en <MultipleCustomHooks>', () => { 
  
    test('debe mostrar el componente correctamente', () => { 
       
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null 
        })
       
        render(<MultipleCustomHooks />);

        expect( screen.getByText('....Loading') );
        expect( screen.getByText( 'Rick and Morty' ) );
        const nextButton = screen.getByRole( 'button',{ name: 'Next Image' } );
        expect( nextButton.disabled).toBeTruthy();
        screen.debug();
     });
    test('debe mostrar un Quote', () => { 
        
        
        useFetch.mockReturnValue({
            data: [{image: '' , name: 'Flavio'}],
            isLoading: false,
            hasError: null 
        });
        
        render(<MultipleCustomHooks />);
        screen.debug();
        //  expect( screen.getByText('hola') ).toBeTruthy();
    });
     
     
 });