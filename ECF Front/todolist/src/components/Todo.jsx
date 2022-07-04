import { useState } from 'react'
import { DivTodo, ButtonCheck } from '../style/style'

const Todo = ({ title, id, deleteTodo }) => {

const[validate, setValidate] = useState('')

    const ValidateTodo = () => {
        setValidate(!validate)
    }

    return (
        <DivTodo>
            <p>{title}</p>
            <button onClick={() => deleteTodo(id)}><i class="fa-solid fa-trash"></i></button>
            <ButtonCheck style={{backgroundColor: validate ? "green": ""}} onClick={() => ValidateTodo()}><i class="fa-solid fa-check"></i></ButtonCheck>
        </DivTodo>
    )
}

export default Todo
