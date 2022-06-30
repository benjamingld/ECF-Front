import Todo from "./todo";
import { useState } from "react";
import { ListContainer, H1   } from '../../style/style'

const List = ({title, deleteList, id}) => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
 
    const handleClick = () => {
        if(value) {
            setTodos(pervState => [...pervState, {id: Math.floor(Math.random()*1000), title: value}])
            setValue('')
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
    }

    return(
        <ListContainer>
            <H1>{title}</H1>
            
            <input 
                type="text"
                value={value}
                placeholder="Créer todo"
                onChange={(e) => handleChange(e)}
            />

            <button onClick={() => handleClick()}>Créer todo</button>

            {todos.map((todo) => 
                <Todo 
                    key={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    id={todo.id}
                />
            
            )}
            <button onClick={() => deleteList(id)}>Supprimer liste</button>
        </ListContainer>
        
    )
}

export default List;