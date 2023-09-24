import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Test the todoReducer', () => { 
    
    const initialState = [{
            id:1,
            description: 'Demo Todo',
            done: false
        }];

    test('must return to the initial state', () => { 
        
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
        


     });

     test('you must add a TODO', () => { 
        
        const action = {
            type: '[TODO] Add Todo', 
            payload: {
                id: 2,
                description: 'New todo #2',
                done: false
            }
        };
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload )
      });

      test('you must delete a TODO', () => { 
        
        const action = {
            type : '[TODO] Remove Todo',
            payload: 1
        };
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
       });
       test('You must complete the Toggle', () => { 
        const action = {
            type : '[TODO] Toggle Todo',
            payload: 1
        };
        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
        })
 });