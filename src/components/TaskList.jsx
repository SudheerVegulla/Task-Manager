import Tasks from "./Tasks"

const TaskList = ({tasks,onDelete,onToggle}) => {
    return (
        <div className= "flex flex-col bg-gray-100 p-2 m-2 rounded-lg">
             {tasks.map(el => <Tasks key={el.id} task = {el} onDelete={onDelete} onToggle={onToggle}/>)}
        </div>     
    )
}

export default TaskList;