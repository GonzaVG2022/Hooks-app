import { screen, render } from "@testing-library/react"

import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Test the <HomePage/>', () => { 

    const user = {
        id: 1,
        name: 'Flavio'
    }

    test('must show the component without the user', () => { 
        
        render(
            <UserContext.Provider value={{ user: null }}>
            <HomePage />
            </UserContext.Provider>
            );
            const preTag = screen.getByLabelText('pre')
            expect(preTag.innerHTML).toBe('null')
        // screen.debug();
     });
     test('You must show the component with the user.', () => { 
        
        render(
            <UserContext.Provider value={{ user: user }}>
            <HomePage />
            </UserContext.Provider>
            );
            const preTag = screen.getByLabelText('pre')
            expect(preTag.innerHTML).toContain(user.name)
            expect(preTag.innerHTML).toContain(user.id.toString())
        // screen.debug();
     });
 })