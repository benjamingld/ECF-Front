import { DivTodo } from '../style/style'

const Todo = ({ title, id, deleteTodo }) => {
    return (
        <DivTodo>
            <p>{title}</p>
            <button onClick={() => deleteTodo(id)}>Del todo</button>
        </DivTodo>
    )
}

export default Todo
