import Todo from '../Todo/todo'
import { useState } from 'react'

const List = ({ title }) => {


    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    console.log(todos)

    const HandleChange = (e) => {
        setValue(e.target.value)
    }

    const HandleClick = () => {
        if(value) {
            setTodos ((prevState) => [...prevState, {id:Math.floor(Math.random()*1000), title: value}])
            setValue("")
        }
    }


    return(
        <div style={{border:"2px solid red"}}>
            { title }
            <input 
                value = {value}
                placeholder="Créer un todo"
                onChange={(e) => HandleChange(e)}
             /> 
            <button onClick={() => HandleClick()}>Crée un Todo</button>
           
            {todos
            .map((todo, index) =>  
            <Todo 
                key={index} 
                title={todo.title}
            /> 
            )}
           
        </div>
        
    )
}

export default List;