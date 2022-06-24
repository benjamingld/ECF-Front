import { useState } from 'react'
import Todo from '../Todo/todo'

const List = ({title}) => {

  const [todoValue,setTodoValue] = useState("");
  const [todos, setTodo] = useState([]);
  console.log(todos);

  const HandleClick = (e) => {
    if (todoValue){
      setTodo(prevState => [...prevState,{id:Math.floor(Math.random()*1000) , title: todoValue}]);
      setTodoValue("");
    }
   
  } 
  
  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {title}
      <form onSubmit={preventDefault}>
        <input 
          placeholder="Ecrire la tâche" 
          value={todoValue} 
          onChange={(e) => setTodoValue(e.target.value)}/>

        <button onClick={() => HandleClick()}>Add</button>
      </form>

      <>
        {todos
        .map((todo,index) =>
        <div >
          <Todo key={index} title={todo.title} style={{display:"flex", justifyContent:"center"}}/>
        </div>
        )}
      </>

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