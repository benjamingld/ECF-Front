import useTodoList from '../hooks/useTodoList'
import List from '../components/List'
import { DivTab, TitleTab, ListMap, ButtonValidate, Input,ButtonDelete } from '../style/style'

const ListContainer = ({ title, id, deleteListContainer }) => {
    const { value, lists, setLists, handleChange, handleClick } = useTodoList()

    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered)
    }

    return (
        <DivTab>
            <TitleTab>{title}</TitleTab>
            <Input
                type="text"
                placeholder="List"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <ButtonValidate onClick={() => handleClick()}>Add list</ButtonValidate>
            
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
            <ButtonDelete onClick={() => deleteListContainer(id)}>Delete TodoList</ButtonDelete>
        </DivTab>
    )
}

export default ListContainer
