const Todo = ({title}) => {

    return(
        <div style={{border:"2px solid green"}}>
            {title}
            <button>Supprimer la todo</button>
        </div>
    )
}

export default Todo;