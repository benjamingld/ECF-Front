import { useState, useEffect } from 'react'

  const Task = () => {
    const [tasks,setTask] = useState([]);

    return (
      <div className="Task">
        <p>{tasks}</p>
        <button>Delete</button>
        <input type="checkbox"/>
      </div>
    );
  }

  export default Task;