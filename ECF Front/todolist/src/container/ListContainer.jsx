import useTodoList from '../hooks/useTodoList'
import List from '../components/List'
import {
    CardTab,
    TitleTab,
    ListMap,
    ButtonValidate,
    Input,
    ButtonDelete,
} from '../style/style'


//passage de props title pour envoyer la value du TabListContainer
//passage de props id et deleteListContainer pour recuperer la fonction  et l'utiliser sur le ButtonDelete
const ListContainer = ({ title, id, deleteListContainer }) => {
    const { value, lists, setLists, handleChange, handleClick } = useTodoList()

    //fonction de suppression des lists, le .filter et setLists(filtered) permet de filtrer les id de chaque liste, supprimer la liste avec l'id selectionner et de renvoyer le reste des listes.
    const deleteList = (listID) => {
        let filtered = lists.filter((del) => del.id !== listID)
        setLists(filtered)
    }

    return (
        <CardTab>
            <TitleTab>{title}</TitleTab>
            <Input
                type="text"
                placeholder="Nom de la liste (facultatif)"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <ButtonValidate onClick={() => handleClick()}>
                Ajouter Liste
            </ButtonValidate>

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
            <ButtonDelete onClick={() => deleteListContainer(id)}>
                Supprimer Tableau
            </ButtonDelete>
        </CardTab>
    )
}

export default ListContainer
