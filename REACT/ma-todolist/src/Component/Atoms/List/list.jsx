import { useState } from 'react'
import Todo from '../Todo/todo'

const List = () => {

  const [todoValue,setTodoValue] = useState("");
  const [todos, setTodo] = useState([]);
  console.log(todos)

  // {id: Math.floor(Math.random)*1000 , text: lists} au niveau de la listvalue dans le HandleClick.

  const HandleClick = (e) => {
    if (todoValue){
      setTodo(prevState => [...prevState, todoValue]);
      setTodoValue("");
    }
   
  } 
  
  const preventDefault = (e) => {
     e.preventDefault();
  }

  return (
    <div style={{border:"2px solid green", margin:"20px"}}>

    <div>

      <form onSubmit={preventDefault}>
        <input placeholder="Ecrire la tâche" value={todoValue} onChange={(e) => setTodoValue(e.target.value)}/>
        <button onClick={() => HandleClick()}>AddTodo</button>
      </form>

      <>
        {todos
        .map(todo =>
        <div key={todo} style={{border:"2px solid blue"}}>
          {todo}
          <Todo/>
        </div>
        )}
      </>

      <button>Supprimer</button>
    </div>
    
  </div>
  );
}
  
  export default List;