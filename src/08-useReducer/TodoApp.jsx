
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks"




export const TodoApp = () => {
    const  {todos, countTodo , pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo}  = useTodos()
  return (
    <>
        <h1>Todo App: { countTodo } <small>pending: { pendingTodos }</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList
                   todos={ todos }
                   onDeleteTodo={ handleDeleteTodo }
                   onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
               <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>
       
    
    </>
  )
}
