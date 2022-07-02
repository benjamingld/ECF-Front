import {DivTodo} from '../style/style'

const Todo = ({title, id , deleteTodo}) => {

    return (
        <DivTodo>
            <p>{title}</p>
            <button onClick={() => deleteTodo(id)}><i class="fa-solid fa-trash"></i></button>
        </DivTodo>
        
    )
}

export default Todo;