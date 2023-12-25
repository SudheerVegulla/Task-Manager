import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ({onSubmit}) => {
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [error,setError] = useState("");
    const [status,setStatus] = useState("Incomplete");

    const handleRadioSelection = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim()){
            setError("Task name cannot be empty");
            return;
        }

        if(!date.trim()){
            setError("Date cannot be empty");
            return;
        }

        let parsedDate = new Date(date);
        if(parsedDate < new Date()){
            setError("Due date must be in the future");
            return ; 
        }

        const newTask = {
            id : Date.now(),
            name,
            dueDate : date,
            completed : false,
        }
        onSubmit(newTask);
        setName("");
        setDate("");
        setError("");
    }
    return (
        <div className ="bg-slate-200 rounded-lg p-2 m-2">
            <form onSubmit={handleSubmit}>
                <div>
                <label className="font-medium m-1" htmlFor="taskName">Task Name :</label> 
                <input className="border border-solid border-black rounded-lg m-2 p-1" placeholder = "Enter name" id = "taskName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <label className="font-medium px-3" htmlFor="dueDate">Due date  :</label> 
                <input className="border border-solid border-black rounded-lg p-1 m-2" id = "dueDate" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                {/* <DatePicker 
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-mm-dd"
                placeholderText="Select due date"
                /> */}
                </div>
                {/* <button onClick={}>{}</button> */}
                {/* <div>
                    <label >Status :</label>
                    <label><input type = "radio" value = "Incomplete" checked = {status === "Incomplete"} onChange = {handleRadioSelection} />Incomplete</label>
                    <label><input type = "radio" value = "Complete" checked = {status === "Complete"} onChange = {handleRadioSelection} />Complete</label>
                    </div> */}
                    <button className = "bg-slate-400 rounded-lg p-2 m-2 flex m-auto"type = "submit"> Submit</button>
                    {error && <p style={{color:"red"}}>{error}</p>}
            </form>
        </div>
    )
}

export default AddTask;