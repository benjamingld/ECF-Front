import { useState } from 'react'
import List from '../Atoms/List/list'
//Le container global
const ContainerList = () => {

  const [listValue,setListValue] = useState("");
  const [lists, setList] = useState([]);
  console.log(lists)

  // {id: Math.floor(Math.random)*1000 , text: lists} au niveau de la listvalue dans le HandleClick.


  const HandleClick = (e) => {
    if(listValue) {
      setList(prevState => [...prevState, listValue]);
      setListValue("");
    }
    
  } 
  
  const preventDefault = (e) => {
     e.preventDefault();
  }

    return (
      <div style={{border:"2px solid green", margin:"20px"}}>

      <div>

        <form onSubmit={preventDefault}>
          <input placeholder="Ecrire la liste" value={listValue} onChange={(e) => setListValue(e.target.value)}/>
          <button onClick={() => HandleClick()}>AddList</button>
        </form>

        <>
          {lists
          .map(list =>
          <div key={list} style={{border:"2px solid red"}}>
            {list}
            <List/>
          </div>
         )}

        </>
        
      </div>
      
    </div>
    );
  }
  
  export default ContainerList;
