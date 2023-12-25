import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import { Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((el) => el.id !== id));
  };
  const addTaskButtonHandler = () => {
    setShowAddTaskForm(true);
    // <AddTask onSubmit={addTask} />;
  };

  const toggleTask = (id, status) => {
    setTasksList((prevTasks) =>
      prevTasks.map((el) => (el.id === id ? { ...el, completed: status } : el))
    );
  };

  const filterTasks = () => {
    switch (filter) {
      case "completed":
        return tasksList.filter((el) => el.completed);
      case "incompleted":
        return tasksList.filter((el) => !el.completed);
      default:
        return tasksList;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <h1 className="m-3 font-bold text-xl">Task Manager</h1>
      <button
        className=" inline-block text-center p-2 m-2 rounded-lg bg-slate-400"
        onClick={addTaskButtonHandler}
      >
        Add task
      </button>
      {/* </Link> */}
      {showAddTaskForm && <AddTask onSubmit={addTask} />}
      <TaskFilter onFilterChange={setFilter} />
      {tasksList.length !== 0 && (
        <TaskList
          tasks={filterTasks()}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      )}
    </div>
  );
}

export default App;
