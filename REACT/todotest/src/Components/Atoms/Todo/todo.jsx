const Todo = ({title, deleteTodo, id}) => {

    return (
        <div>
            {title}
            <button onClick={() => deleteTodo(id)}>Supp todo</button>
        </div>
        
    )

}

export default Todo;