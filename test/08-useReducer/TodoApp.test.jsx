import { screen, render } from "@testing-library/react";

import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos')
describe('Test the <TodoApp/>', () => { 
    
    useTodos.mockReturnValue({
        todos:[{
            id:1,
            description: 'Todo#1',
            done: false
        },
        {
            id:2,
            description: 'Todo#2',
            done: true
        }],
        countTodo: 2, 
        pendingTodos: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    });
    test('must display the component correctly', () => { 
        render( <TodoApp /> );
        // screen.debug();
     });
 }); 