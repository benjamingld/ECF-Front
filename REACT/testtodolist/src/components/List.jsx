import Todo from './Todo'
import { DivList, H3} from '../style/style'
import useTodo from '../hooks/useTodo';


const List = ({title, id, deleteList}) => {

    const {value, setValue, todos, setTodos, handleChange, handleClick} = useTodo();

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
    }


    return (
        <DivList>
            <H3>{title}</H3>
            <input 
                type="text"
                value={value}
                placeholder='Add Todo'
                onChange={(e) => handleChange(e)}    
            />

            <button onClick={() => handleClick()}>Add Todo</button>

            {todos.map((todo) => (
               <Todo
                    key={todo.id}
                    title={todo.title}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                
                /> 
            ))}

            <button onClick={() => deleteList(id)}>Delete List</button>
            
        </DivList>
    )   
}

export default List;