import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => { 

    const todo = {
        id: 1,
        description: 'agua',
        done:false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el Todo Pendiente de completar', () => { 
        
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
     test('debe mostrar el Todo completado', () => { 
        
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
     
     test('span debe llamar el ToggleTodo cuando se hace click', () => { 
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

      test('span debe llamar el deleteTodo cuando se hace click', () => { 
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