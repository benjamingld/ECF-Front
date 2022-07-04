import ListContainer from './ListContainer'
import useTodoList from '../hooks/useTodoList'

 
const TabListContainer = () => {
    const {
        value,
        listContainers,
        setListContainers,
        handleChange,
        handleClick,
    } = useTodoList()

    const deleteListContainer = (listContainerID) => {
        let filtered = listContainers.filter(
            (del) => del.id !== listContainerID
        )
        setListContainers(filtered)
    }

    return (
        <div>
            <h1>Ma TODOLIST</h1>
            <input
                type="text"
                placeholder="Array"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <button onClick={() => handleClick()}>Add Tableau</button>


            {listContainers.map((listContainer) => (
                <ListContainer
                    key={listContainer.id}
                    title={listContainer.title}
                    deleteListContainer={deleteListContainer}
                    id={listContainer.id}
                />
            ))}

            
        </div>
    )
}

export default TabListContainer
