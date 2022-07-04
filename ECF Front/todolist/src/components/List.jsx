import useTodoList from '../hooks/useTodoList'
import { TitleList, DivList } from '../style/style'
import Todo from './Todo'

const List = ({ title, id, deleteList }) => {
    const { value, todos, setTodos, handleChange, handleClick } = useTodoList()

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
    }

    return (
        <DivList>
            <TitleList>{title}</TitleList>
            <input
                type="text"
                placeholder="Todo"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <button onClick={() => handleClick()}>Add Todo</button>
            
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    id={todo.id}
                />
            ))}
            <button onClick={() => deleteList(id)}>Delete List</button>
        </DivList>
    )
}

export default List
