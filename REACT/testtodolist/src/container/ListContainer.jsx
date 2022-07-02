import List from '../components/List'
import useTodo from '../hooks/useTodo'
import { ListContent, H1 } from '../style/style';


const ListContainer = () => {

    const {value, setValue, lists, setLists, handleClick, handleChange} = useTodo();

    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered) 
    }


    return(
        <>
            <H1>Ma TodoList</H1>
            <input 
                type = "text"
                value = {value}
                placeholder = "Add list"
                onChange = {(e) => handleChange(e)}
             />

             <button onClick = {() => handleClick() }>Add list</button>

            <ListContent>
                {lists.map((list) => (
                    <List
                        key={list.id}
                        title={list.title}
                        id={list.id}
                        deleteList ={deleteList}
                    />
                ))}
            </ListContent>
        </>
    )
}

export default ListContainer;