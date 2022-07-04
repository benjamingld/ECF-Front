import useTodoList from '../hooks/useTodoList'
import { TitleList, DivList, ButtonValidate, Input, ButtonDelete } from '../style/style'
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
            <Input
                type="text"
                placeholder="Todo"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <ButtonValidate onClick={() => handleClick()}>Add Todo</ButtonValidate>
            
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    id={todo.id}
                />
            ))}
            <ButtonDelete onClick={() => deleteList(id)}>Delete List</ButtonDelete>
        </DivList>
    )
}

export default List
