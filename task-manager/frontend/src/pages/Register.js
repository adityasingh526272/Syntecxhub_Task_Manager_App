import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const register = async()=>{

try{

await axios.post(
"http://localhost:5000/api/auth/register",
{
name,
email,
password
}
)

alert("Registered Successfully")

navigate("/")

}catch(err){
alert("Error")
}

}

return(

<div>

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={register}>
Register
</button>

</div>

)

}

export default Register