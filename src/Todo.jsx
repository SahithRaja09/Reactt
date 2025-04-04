import React,{useState} from 'react';

import "./Todo.css"
function Todo() 
{
    const [tasks,setTasks] =useState([]);
    const [newTasks,setNewTasks] = useState("");

    const handleInputChange =(e) =>
    {
        setNewTasks(e.target.value);
    }

    const addTask =(task) =>
    {
        // task.map((element,index) =>{
        //     if(tasks!==index)
                
        // })
        setTasks(t =>[...tasks,newTasks]);
        setNewTasks("");
         
    }

    const DeleteTask = (index) =>
    {

    }

    const Tasktop = (index) =>
    {

    }

    const Taskdown = (index) =>
    {

    }

 return(<div className='Todolist'>
    <h3>TO-DO-LIST</h3>
   <div>
   <input type="text" placeholder='Enter a task..' value={newTasks} onChange={(handleInputChange) } />
   <button onChange={addTask} className="add-btn">Add Task</button>
   </div>
   <ol>
    {tasks.map((_,i) =>
<li key={i}>
    <span className='text'>{tasks}</span>
    <button className='delete' onClick={() =>DeleteTask}>Delete Task</button>
    <button className='moveup' onClick={() =>Tasktop}>Up ⬆️</button>
    <button className='movedown' onClick={() =>Taskdown}>Down ⬇️</button>
</li>
    )}
   </ol>
 </div>)
}

export default Todo;