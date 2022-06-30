import List from '../Atoms/List/list'
import { useState } from 'react'
import { ContainerList } from '../Style/style'

const ListContainer = () => {
    const [value, setValue] = useState('')
    const [lists, setLists] = useState([])
    console.log(lists)

    const handleClick = () => {
        if (value) {
            setLists((prevState) => [
                ...prevState,
                { id: Math.floor(Math.random() * 1000), title: value },
            ])
            setValue('')
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered)
        console.log(filtered)
    }

    return (
        <div>
            <input
                value={value}
                placeholder="Créer la Liste"
                onChange={(e) => handleChange(e)}
            />

            <button
                onClick={() => {
                    handleClick()
                }}
            >
                Add list
            </button>

        <ContainerList>
            {lists.map((list) => (
                <List
                    key={list.id}
                    title={list.title}
                    deleteList={deleteList}
                    id={list.id}

                />
            ))}
             </ContainerList>
        </div>
    )
}

export default ListContainer
