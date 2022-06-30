import { useState } from "react";
import List from "../Atoms/list";
import { Container,   } from '../../style/style'

const ContainerList = () => {

    const [value, setValue] = useState('')
    const [lists, setLists] = useState([])
    console.log(lists)

    const handleClick = () => {
        if (value) {
            setLists(prevState => [...prevState, {id: Math.floor(Math.random()*1000) , title: value}])
            setValue("")
        }
        
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered)
    }

    return(
        <>
        <input
            type="text"
            value= {value}
            placeholder="Crée la liste"
            onChange={(e) => {handleChange(e)}}
            />
        <button onClick={() => {handleClick()}}>Créer liste</button>

        <Container>
        {lists.map((list) => (
        <List 
            key={list.id}
            title={list.title}
            deleteList={deleteList}
            id={list.id}
            />
        ))}
        </Container>
        
        </>

    )
}

export default ContainerList;