import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description:''
    });
    const onFormSubmint = ( e ) => {
        e.preventDefault();
        if (description.length <= 1) return
        const newtodo = {
            id: new Date().getTime(),
            done: false,
            description
        };
        onNewTodo && onNewTodo(newtodo);
        onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmint }>
        <input 
        type="text"
        placeholder="What's there TODO"
        className="form-control"
        value={description}
        onChange={ onInputChange }
        name="description"
        />
        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
