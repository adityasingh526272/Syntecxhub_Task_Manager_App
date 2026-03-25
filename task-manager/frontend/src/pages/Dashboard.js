import {useState,useEffect} from "react"
import axios from "axios"

function Dashboard(){

const [tasks,setTasks] = useState([])
const [title,setTitle] = useState("")

const token = localStorage.getItem("token")

useEffect(()=>{
fetchTasks()
},[])

const fetchTasks = async()=>{

const res = await axios.get(
"http://localhost:5000/api/tasks",
{
headers:{
Authorization:token
}
}
)

setTasks(res.data)

}

const addTask = async()=>{

await axios.post(
"http://localhost:5000/api/tasks",
{
title
},
{
headers:{
Authorization:token
}
}
)

fetchTasks()
}

const deleteTask = async(id)=>{

await axios.delete(
"http://localhost:5000/api/tasks/"+id,
{
headers:{
Authorization:token
}
}
)

fetchTasks()
}

return(

<div>

<h2>Task Manager</h2>

<input
placeholder="Enter Task"
onChange={(e)=>setTitle(e.target.value)}
/>

<button onClick={addTask}>
Add Task
</button>

<hr/>

{
tasks.map(task=>(
<div key={task._id}>

{task.title}

<button
onClick={()=>deleteTask(task._id)}
>
Delete
</button>

</div>
))
}

</div>

)

}

export default Dashboard