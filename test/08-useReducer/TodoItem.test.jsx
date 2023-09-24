import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test the <TodoItem/>', () => { 

    const todo = {
        id: 1,
        description: 'agua',
        done:false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show All Pending Completion', () => { 
        
        render( <TodoItem 
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
                />
              );

        const liElement = screen.getByRole('listitem');
        // console.log(liElement.innerHTML)
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' )
        
        const spanElement = screen.getByLabelText('span')
        // console.log( spanElement.className )
        expect( spanElement.className ).toBe( 'aling-self-center ' )
        
        // screen.debug()
     });
     test('should show All completed', () => { 
        
        todo.done = true;

        render( <TodoItem 
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
                />
              );

        
        
        const spanElement = screen.getByLabelText('span')
        // console.log( spanElement.className )
        expect( spanElement.className ).toContain( 'text-decoration-line-through' )
        
        // screen.debug()
     });
     
     test('span should call the ToggleAll when clicked', () => { 
        render( <TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
            );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
      });

      test('pan should call the DeleteTodo when clicked', () => { 
        render( <TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
            );
        const spanElement = screen.getByLabelText('spanDelete');
        fireEvent.click( spanElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
      });
 });