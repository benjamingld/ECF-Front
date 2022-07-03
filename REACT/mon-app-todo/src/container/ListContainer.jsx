import List from "../components/list"
import useTodo from "../hooks/useTodo";

const ListContainer = () => {

    const {value, lists, setLists, handleChange, handleClick} = useTodo();

    const deleteList = (listID) => {
        let filtered = lists.filter((del)=> del.id !== listID)
        setLists(filtered)

    }

    return (
        <div>
            <input 
                type="text"
                value={value}
                placeholder="add list"
                onChange={(e) => handleChange(e)}
                />

            <button onClick={() => handleClick()}>add list</button>

            {lists.map(list => (
                <List 
                    key={list.id}
                    title={list.title}
                    id={list.id}
                    deleteList={deleteList}
                />
                
            ))}
            {console.log(lists)}
                

        </div>
        
    )
}

export default ListContainer;