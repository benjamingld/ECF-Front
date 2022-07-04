import useTodoList from '../hooks/useTodoList'
import List from '../components/List'
import { DivTab, TitleTab, ListMap } from '../style/style'

const ListContainer = ({ title, id, deleteListContainer }) => {
    const { value, lists, setLists, handleChange, handleClick } = useTodoList()

    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered)
    }

    return (
        <DivTab>
            <TitleTab>{title}</TitleTab>
            <input
                type="text"
                placeholder="List"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <button onClick={() => handleClick()}>Add list</button>
            <button onClick={() => deleteListContainer(id)}>
                Del listContainer
            </button>
            <ListMap>
                {lists.map((list) => (
                    <List
                        key={list.id}
                        title={list.title}
                        deleteList={deleteList}
                        id={list.id}
                    />
                ))}
            </ListMap>
        </DivTab>
    )
}

export default ListContainer
