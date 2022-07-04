import { useState } from "react";

const useTodoList = () => {

    const [value, setValue] = useState("");
    const [listContainers, setListContainers] = useState([]);
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    const handleClick = () => {
      if (value) {
        setListContainers((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);
        setTodos((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);
      }
      setLists((prevState) => [...prevState,{ id: Math.floor(Math.random() * 1000), title: value }]);
      setValue("");
    }
    
    return {value, setValue, listContainers, setListContainers, lists, setLists, todos, setTodos, handleChange, handleClick}
}

export default useTodoList;