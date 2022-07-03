import { useState } from "react";

const Todo = ({title, id , deleteTodo}) => {

    const [validate, setValidate] =   useState("")

    const validateTodo = () => {
        setValidate(!validate)
    }

    return (
        <div style={{border:"2px solid red"}}>
            <p>{title}</p>
            <button onClick={() => deleteTodo(id)}>delete Todo</button>
            <button style={{backgroundColor: validate? "" : "red"}}onClick={() => validateTodo(id)}>Check</button>
        </div>
        
    )
}

export default Todo;