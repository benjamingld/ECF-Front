import useTodo from "../hooks/useTodo";
import Todo from "./todo";

const List = ({title, id, deleteList}) => {

    const {value, todos, setTodos, handleChange, handleClick} = useTodo();

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del)=> del.id !== todoID)
        setTodos(filtered)
    }

    return (

        <div style={{border:"2px solid black"}}>
            {title}
            <input 
                type="text"
                value={value}
                placeholder="add todo"
                onChange={(e) => handleChange(e)}
                />

            <button onClick={() => handleClick()}>add todo</button>

            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    title={todo.title}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                />
                
            ))}
            {console.log(todos)}
            <button onClick={() => deleteList(id)}>delete list</button>
                

        </div>
            

            
  
        
    )
}

export default List;