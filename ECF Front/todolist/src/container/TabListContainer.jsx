import ListContainer from './ListContainer'
import useTodoList from '../hooks/useTodoList'
import { ButtonValidate, Input } from '../style/style'

const TabListContainer = () => {
    const {
        value,
        listContainers,
        setListContainers,
        handleChange,
        handleClick,
    } = useTodoList()

    //fonction de suppression des tableaux, le .filter et setListContainer(filtered) permet de filtrer les id de chaque tableau, supprimer le tableau avec l'id selectionner et de renvoyer le reste des tableaux.
    const deleteListContainer = (listContainerID) => {
        let filtered = listContainers.filter(
            (del) => del.id !== listContainerID
        )
        setListContainers(filtered)
    }

    return (
        <div>
            <Input
                type="text"
                placeholder="Nom du tableau"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <ButtonValidate onClick={() => handleClick()}>
                Ajouter un tableau
            </ButtonValidate>

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
