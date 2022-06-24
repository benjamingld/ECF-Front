import { useState } from 'react'
import List from '../Atoms/List/list'
//Le container global
const ContainerList = () => {

  const [listValue,setListValue] = useState("");
  const [lists, setList] = useState([]);
  console.log(lists)

  // {id: Math.floor(Math.random)*1000 , text: lists} au niveau de la listvalue dans le HandleClick.

  //{(e) => setListValue(e.target.value)} equivaut a  {(e) => HandleChange(e)}
//   const HandleChange = (e) => {
//     setListValue(e.target.value)
//   }


  const HandleClick = (e) => {
    if(listValue) {
      setList(prevState => [...prevState, {id: Math.floor(Math.random()*1000) , title: listValue}]);
      setListValue("");
    }
  } 


    return (
      <div>   
          <input 
            placeholder="Nom de la liste" 
            value={listValue} 
            onChange={(e) => setListValue(e.target.value)}/>

          <button onClick={() => HandleClick()}>Ajouter</button>

        <div>
          {lists
          .map((list,index) =>
          <List key={index} title={list.title}/>

         )}
        </div>
      
    </div>
    );
  }
  
  export default ContainerList;
