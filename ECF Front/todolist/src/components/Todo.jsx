import { useState } from 'react'
import { CardTodo, ButtonCheck, TitleTodo } from '../style/style'

//passage de props title pour envoyer la value du ListContainer
//passage de props id et deleteTodo pour recuperer la fonction  et l'utiliser sur le button
const Todo = ({ title, id, deleteTodo }) => {

    //création d'un état pour le boutton check sur les Todos
    const [validate, setValidate] = useState('')

    //fonction pour le changment de backgroundColor sur le ButtonCheck
    const validateTodo = () => {
        setValidate(!validate)
    }

    return (
        <CardTodo>
            <TitleTodo>{title}</TitleTodo>
            <button onClick={() => deleteTodo(id)}>
                <i class="fa-solid fa-trash"></i>
            </button>
            <ButtonCheck
                style={{ backgroundColor: validate ? 'green' : '' }}
                onClick={() => validateTodo()}
            >
                <i class="fa-solid fa-check"></i>
            </ButtonCheck>
        </CardTodo>
    )
}

export default Todo