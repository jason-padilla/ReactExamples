import React, {useState} from 'react';
const ToDo = (props) => {
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList,{label: e.target.newTask.value, done: false}]);
    e.target.newTask.value="";
    console.log(taskList);
  }
  const deleteTask = (e,currentTask) => {
    const newTasks = taskList.filter(task => task !== currentTask);
    setTaskList(newTasks)
  }
  const changeCompletion = (e,idx) => {
    taskList[idx].done = !taskList[idx].done;
    setTaskList([...taskList]);
  }
  return (
    <div>
      <header>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="newTask" autoComplete="off"/>
          <input type="submit" name="btn" value="add"/>
        </form>
      </header>
      <main>
        <h3>Tasks:</h3>
        {
          taskList.map((task,i) => {
            const checkboxStyle = {display: "inline"}
            if (task.done) {
              checkboxStyle.textDecoration = "line-through"
            }
            return <div key={i}>
              <p style={checkboxStyle}>{task.label} </p>
              <input onChange={(e)=>changeCompletion(e,i)} type="checkbox" checked={task.done}/> 
              <input onClick={(e)=>deleteTask(e,task)} type="button" value="delete"/>
            </div>
          })
        } 
      </main>
    </div>
  )
}

export default ToDo;