import React, { useEffect, useRef, useState } from "react";
import "../CSS/taskForm.css"
import { render } from "react-dom";

function TaskForm(){
    const [totalCount,setTotalCount] = useState(0);
    const [completed,setCompletedTask] = useState(0);
    const [taskList,setTaskList] = useState([{task:"NewTask",Completed:false,isFavourite:false}]);
    const [val , setval]  = useState('') ;
    const [isFavouriteList,setIsFavouriteList] = useState([]);
    const [isCompletedList, setIsCompletedList] = useState([])
    var updated = [];
    var complete = [];
    function Addtask(){
        if(!val)return;
        setTaskList([...taskList,{task:val,Completed:false,isFavourite:false}])
        setval('')
    }
    function settask(e){
         setval(e.currentTarget.value) 
    }
    useEffect(function(){
         setTotalCount(taskList.length)
    },[taskList])
    useEffect(function(){
        setCompletedTask(isCompletedList.length)
    },[isCompletedList])

    function setfav(index,event){
        setTaskList(taskList.map(function(elemen,ind){
            if(ind===index){
                elemen.isFavourite = !elemen.isFavourite
            }
            return elemen;
        }))

        //creating another list for the favourites 
        setIsFavouriteList(
            taskList.filter((element)=>{
              return element.isFavourite == true;
            })
        )
    }
    function deletetask(ind){
        setTaskList(taskList.filter(function(ele,i,arr){
            return i!=ind
        }))
    }
    function CompletedTask(i,event){
        setTaskList(
         updated =  taskList.map(
                function(elem,ind,arr){
                    if(i==ind){
                        elem.Completed = !elem.Completed;
                    }
                    return elem;
                }))

        taskList.forEach(
            function(e,i,a){
                if(e.Completed){
                    complete.push(e);
                }
            }
        )
        setIsCompletedList(complete)
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
                                    <div><b>{ind + 1}.</b><u className={taskList[ind].Completed?'line':''}>{ele.task}</u></div>
                                <div className="d-flex justify-content-around align-items-center" style={{width:"22%"}}>
                                <span>
                                    <i className={"fa-regular  fa-heart"} id={ind} hidden={taskList[ind].isFavourite} onClick={setfav.bind(null,ind)}></i>
                                    <i className={"fa-solid fa-heart"} id={ind}  hidden={!taskList[ind].isFavourite} onClick={setfav.bind(null,ind)}></i> 
                                </span>
                                <i className="fa-solid fa-trash"onClick={deletetask.bind(null,ind)}></i> 
                                <i className="fa-solid fa-check-double" onClick={CompletedTask.bind(null,ind)} style={{color: '#26e5f2'}}></i>
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