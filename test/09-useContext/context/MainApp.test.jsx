import { render, screen } from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('test the <MainApp/>', () => { 
    test('should first show the HomePage', () => { 
        render( 
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
         );
         expect( screen.getByText('HomePage') ).toBeTruthy();
        //  screen.debug();
     });
     test('should first show the LoginPage', () => { 
        render( 
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
         );
         expect( screen.getByText('LoginPage') ).toBeTruthy();
         screen.debug();
     });
 });