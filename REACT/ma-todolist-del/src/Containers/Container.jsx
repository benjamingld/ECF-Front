import { useState } from 'react';
import List from '../Components/List/list'


const Container = () => {

    const [value, setValue] = useState ("")
    const [lists, setLists] = useState ([])
    console.log(lists)

    
    const HandleChange = (e) => {
        setValue(e.target.value)
    }

    const HandleClick = () => {
        if(value){
        setLists((prevState) => [...prevState, { id:Math.floor(Math.random()*1000) , title: value }])
        setValue("")
        }
    }

    return(
        <div style={{border:"5px solid black"}}>
            <input 
                value= {value}
                placeholder='Créer une liste' 
                onChange={(e) => HandleChange(e)}
            />
            <button onClick={ () => HandleClick()} >Ajout d'une liste</button>
            
            {lists
            .map((list, index) => 
            <List 
                key={index}
                title = {list.title} 
            />
            )}

        </div>
        
    )
}

export default Container;



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