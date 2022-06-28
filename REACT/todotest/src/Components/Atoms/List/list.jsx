import { useState } from "react";
import Todo from "../Todo/todo";

const List = ({title, id, deleteList}) => {

    const [value,setValue] = useState("")
    const [todos,setTodos] = useState([])
    console.log(todos)



    const handleClick = () => {
        if(value) {
            setTodos((prevState) => [...prevState, { id:Math.floor(Math.random()*1000) , title: value}])
            setValue("")
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
    }

    return (
        <div style={{border:"2px solid red", margin:10}}>
        {title}
        <input 
            value={value}
            placeholder="Créer une todo"
            onChange={(e) => handleChange(e)}
            />

        <button onClick={() => {handleClick()}}>Crée todo</button>
        

        {todos
        .map((todo, index) => 
        <Todo 
            key={index}
            title={todo.title}
            id={todo.id}
            deleteTodo={deleteTodo}/>
        )}

        <button onClick={() => {deleteList(id)}}>Suppression Liste</button>


        </div >
        
    )

}

export default List;