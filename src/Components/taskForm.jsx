import React, { useState } from "react";
import "../CSS/taskForm.css"

function TaskForm(){
    const [totalCount,setTotalCount] = useState(0);
    const [completed,setCompletedTask] = useState(0);
    const [taskList,setTaskList] = useState([]);
    return(
        <div>
            <div className="container">
                <h1>ToDoList</h1>
                <input type="text" class="form-control width" name="todoinput" id="todo" placeholder="Enter The Task"/>
                <span><button type="button" class="btn btn-primary">Add</button></span>
                <div className="flex-box">
                    <b>Total Task:{totalCount}</b>
                    <b>Completed Task:{completed}</b>
                </div>
                <div className="listbox">
                    <div className="list d-flex justify-content-between">
                        <div>1.MyTask</div>
                        <div className="d-flex justify-content-around align-items-center" style={{width:"22%"}}>
                            <i class="fa-solid fa-heart" id="heart"></i>
                            <i class="fa-solid fa-trash"></i> 
                            <i class="fa-solid fa-check-double" style={{color: '#26e5f2'}}></i>
                            <i class="fa-regular fa-pen-to-square" style={{color: '#d99f20'}}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskForm