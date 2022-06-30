import { useState } from "react"

const Todo = ({title, deleteTodo, id}) => {



    return (
        <div>
            {title}
            <button onClick={() => deleteTodo(id)}>❌</button>
            <button onClick={() => checked()}>✔️</button>
        </div>
        
    )

}

export default Todo;