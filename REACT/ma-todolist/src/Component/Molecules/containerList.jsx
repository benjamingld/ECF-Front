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
      setList(prevState => [...prevState, {id: Math.floor(Math.random()*1000) , title: listValue}]);
      setListValue("");
    }
  } 
  
  const preventDefault = (e) => {
     e.preventDefault();
  }

    return (
      <div>

        <form onSubmit={preventDefault}>
          <input placeholder="Nom de la liste" value={listValue} onChange={(e) => setListValue(e.target.value)}/>
          <button onClick={() => HandleClick()}>Ajouter</button>
        </form>

        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
          {lists
          .map(list =>
          <div key={list} style={{border:"2px solid red",borderRadius:"5%", margin:"1%", width:"45%"}}>
            
                  <List/>
          </div>
         )}

        </div>
      
    </div>
    );
  }
  
  export default ContainerList;
