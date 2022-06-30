import { useState } from "react";
import { TodoContainer } from "../../style/style";
import { ButtonDel, ButtonModif, H2} from "../../style/style";


const Todo = ({ title, deleteTodo, id }) => {

  const [validate, setValidate] = useState("")

  const ValidateTodo = () => {
    setValidate(!validate)
  }

  return (
    <TodoContainer>

      <div>
        <H2>{title}</H2>
      </div>
      

    <div>
      <button style={{backgroundColor : validate ? "green" : ""}} onClick={()=> ValidateTodo()}><i class="fa-solid fa-check"></i></button>
      <ButtonModif ><i class="fa-solid fa-pen"></i></ButtonModif>
      <ButtonDel onClick={() => deleteTodo(id)}><i class="fa-solid fa-trash-can"></i></ButtonDel>
    </div>
      

    </TodoContainer>
  );
};

export default Todo;