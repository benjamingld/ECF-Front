import useTodoList from '../hooks/useTodoList'
import {
    TitleList,
    CardList,
    ButtonValidate,
    Input,
    ButtonDelete,
} from '../style/style'
import Todo from './Todo'

//passage de props title pour envoyer la value du ListContainer
//passage de props id et deleteListe pour recuperer la fonction  et l'utiliser sur le ButtonDelete
const List = ({ title, id, deleteList }) => {
    const { value, todos, setTodos, handleChange, handleClick } = useTodoList()

    //fonction de suppression des todos, le .filter et setTodos(filtered) permet de filtrer les id de chaque todos, supprimer le todo avec l'id selectionner et de renvoyer le reste des todos.
    const deleteTodo = (todoID) => {
        let filtered = todos.filter((del) => del.id !== todoID)
        setTodos(filtered)
    }

    return (
        <CardList>
            <TitleList>{title}</TitleList>
            <Input
                type="text"
                placeholder="Todo"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <ButtonValidate onClick={() => handleClick()}>Ajout</ButtonValidate>

            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    id={todo.id}
                />
            ))}
            <ButtonDelete onClick={() => deleteList(id)}>
                Delete List
            </ButtonDelete>
        </CardList>
    )
}

export default List
