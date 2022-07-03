import { useState } from "react";

const useTodo = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      setLists((prevState) => [
        ...prevState,
        { id: Math.floor(Math.random() * 1000), title: value },
      ]);
      setTodos((prevState) => [
        ...prevState,
        { id: Math.floor(Math.random() * 1000), title: value },
      ]);
      setValue("");
    }
  };

  return {
    value,
    setValue,
    lists,
    setLists,
    todos,
    setTodos,
    handleChange,
    handleClick,
  };
};
export default useTodo;
