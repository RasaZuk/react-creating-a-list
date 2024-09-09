import { useState } from "react";

export function ToDoList() {

    const [tasks, setTasks] = useState(["isplauti"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !=="") {
        setTasks(t=> [...t, newTask])
        }  
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, indx) => indx !==index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks];
        if (index > 0) {
          [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks)  
        }
    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks];
        if (index < tasks.length) {
          [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index +1], updatedTasks[index]];
        setTasks(updatedTasks)  
        }
    }

    return (
        <div>        
         <h1>TO-DO-LIST</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>ADD</button>
            </div>
        <ul>
        {
            tasks.map((task, index) =>
            <li key={index} >
                <span className="text">{task}</span>
                <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                <button className="up" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="down" onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>
            )
        }
        </ul>
        </div>
    );  
}