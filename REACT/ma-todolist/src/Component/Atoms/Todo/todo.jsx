const Todo = ({title}) => {

  return (
    <div className="Todo">
      {title}
      <input type="checkbox"/>
      <button>Del</button>
      
    </div>
  );
}

  export default Todo;