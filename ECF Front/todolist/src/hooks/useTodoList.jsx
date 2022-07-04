import { useState } from "react";

const useTodoList = () => {

  //création des états
    const [value, setValue] = useState("");
    const [listContainers, setListContainers] = useState([]);
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);
  
    //la fonction handleChange permet de mettre à jour la value dans l'input à chaque lettre entrée.
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    const handleClick = () => {

      //le si permet de ne pas pourvoir envoyer un tableau ou un todo si l'input est vide 
      if (value) {
      
        //le prevState permet de recuperer les objets precedent et de les ajoutés au tableau(Array) actuel.
        //Le Math.floor(Math.random() * 1000) permet de générer un nombre aléatoire.
        setListContainers((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);
        setTodos((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);
      }
      setLists((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);

      //le setValue permet de vider l'input à chaque validation de celle-ci
      setValue("");
    }
    
    return {value, setValue, listContainers, setListContainers, lists, setLists, todos, setTodos, handleChange, handleClick}
}

export default useTodoList;