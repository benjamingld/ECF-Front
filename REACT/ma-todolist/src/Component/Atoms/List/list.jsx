import { useState } from 'react'
import Todo from '../Todo/todo'

const List = () => {

  const [todoValue,setTodoValue] = useState("");
  const [todos, setTodo] = useState([]);
  console.log(todos);

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
    <div>

      <form onSubmit={preventDefault}>
        <input placeholder="Ecrire la tâche" value={todoValue} onChange={(e) => setTodoValue(e.target.value)}/>
        <button onClick={() => HandleClick()}>Add</button>
      </form>

      <>
        {todos
        .map(todo =>
        <div key={todo} style={{display:"flex", justifyContent:"center"}}>
          <div style={{width:"60%"}}>{todo}</div>

          <Todo/>
        </div>
        )}
      </>

      <button>Supprimer</button>

    </div>
  );
}
  
  export default List;


  // const Todo = ({ todo, todos, setTodos }) => {

  //   function Delete(id) {
    
  //   setTodos(todos.filter((todo) => todo.id !==id));
    
  //   console.log(todo)
    
  //   }
    
  //   return (
    
  //   <p key={todo} style={{ border: "2px solid green", padding: "2px" }}>
    
  //             <input type="checkbox" /> {todo} <button onClick={()=> Delete(todo.id)}>x</button>
    
  //   </p>
    
  //   );
    
  //   };
    
    
    
  //   export default Todo;