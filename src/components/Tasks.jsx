import { useState } from "react";

const Tasks = ({task,onDelete,onToggle}) => {
    const [status,setStatus] = useState(false);
    return (
        <div className = "flex flex-col">
            <h1 className="font-medium">Task Name : {task.name}</h1>
            <h1 className="font-medium" >Due date  : {task.dueDate}</h1>
            <button className = "bg-slate-300 rounded-lg p-1 m-2" onClick={() => {setStatus(!status);onToggle(task.id,!task.completed)}}>{task.completed ? "Completed" : "Incomplete"}</button>
            <button className = "bg-slate-300 rounded-lg p-1 m-2" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

export default Tasks;