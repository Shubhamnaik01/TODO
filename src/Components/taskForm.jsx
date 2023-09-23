import React, { useEffect, useState } from "react";
import "../CSS/taskForm.css"
import { render } from "react-dom";

function TaskForm(){
    const [totalCount,setTotalCount] = useState(0);
    const [completed,setCompletedTask] = useState(0);
    const [taskList,setTaskList] = useState([{task:"NewTask",Completed:false,isFavourite:false}]);
    const [val , setval]  = useState('') ;
    const [isFavourite,setisFavourite] = useState(false);
    function Addtask(){
        setTaskList([...taskList,{task:val,completed:false,isFavourite:false}])
        setval('')
    }
    function settask(e){
         setval(e.currentTarget.value) 
    }
    useEffect(function(){
         setTotalCount(taskList.length)
    },[taskList])

    function setfav(mind){
        
    }
    return(
        <div>
            <div className="container">
                <h1>ToDoList</h1>
                <input type="text" className="form-control width" name="todoinput" id="todo" value={val}  onChange={function(event){settask(event)}} placeholder="Enter The Task"/>
                <span><button type="button" className="btn btn-primary" onClick={function(){Addtask()}}>Add</button></span>
                <div className="flex-box">
                    <b>Total Task:{totalCount}</b>
                    <b>Completed Task:{completed}</b>
                </div>
       {
        taskList.map(function(ele,ind){
            return(
                <div key={ind}>
                <div className="listbox" >
                                <div className="list d-flex justify-content-between">
                                    <div><b>{ind + 1}.</b><u>{ele.task}</u></div>
                                <div className="d-flex justify-content-around align-items-center" style={{width:"22%"}}>
                            <div onClick={setfav.bind(null,ind)}>
                                {
                                    <div>
                                        <i className={"fa-regular  fa-heart"} id="heart"></i>
                                        {/* <i className={" fa-solid fa-heart"} id="heart"></i> */} 
                                    </div>
                                }
                            </div>
                                <i className="fa-solid fa-trash"></i> 
                                <i className="fa-solid fa-check-double" style={{color: '#26e5f2'}}></i>
                                <i className="fa-regular fa-pen-to-square" style={{color: '#d99f20'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

       }
        </div>
    </div>
)
}
    

export default TaskForm