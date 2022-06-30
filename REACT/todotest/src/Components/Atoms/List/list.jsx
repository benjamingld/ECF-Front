import { useState } from 'react'
import Todo from '../Todo/todo'
import { DivList, Button, Title } from '../../Style/style'

const List = ({ title, id, deleteList }) => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    console.log(todos)

    const handleClick = () => {
        if (value) {
            setTodos((prevState) => [
                ...prevState,
                { id: Math.floor(Math.random() * 1000), title: value },
            ])
            setValue('')
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
        console.log('filter' + filtered)
    }

    return (
        <DivList>
            <Title>{title}</Title>
            <input
                value={value}
                placeholder="Créer une todo"
                onChange={(e) => handleChange(e)}
            />

            <Button
                onClick={() => {
                    handleClick()
                }}
            >
                Add todo
            </Button>

            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                />
            ))}

            <Button
                onClick={() => {
                    deleteList(id)
                }}
            >
                Delete List
            </Button>
        </DivList>
    )
}

export default List
