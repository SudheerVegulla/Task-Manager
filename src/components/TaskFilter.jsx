const TaskFilter = ({onFilterChange}) => {
    return (
        <div className = "flex m-3 ">
            <button className="m-2 p-2 bg-slate-400 rounded-lg" onClick = {() => onFilterChange("all")}>Show all</button>
            <button className="m-2 p-2 bg-slate-400 rounded-lg" onClick = {() => onFilterChange("completed")}>Completed</button>
            <button className="m-2 p-2 bg-slate-400 rounded-lg" onClick = {() => onFilterChange("incompleted")}>Incompleted</button>
        </div>
    )
}

export default TaskFilter;