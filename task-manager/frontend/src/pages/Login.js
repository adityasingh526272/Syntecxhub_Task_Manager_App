import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async()=>{

try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{
email,
password
}
)

localStorage.setItem("token",res.data.token)

navigate("/dashboard")

}catch(err){
alert("Invalid Credentials")
}

}

return(

<div>

<h2>Login</h2>

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

<button onClick={login}>
Login
</button>

<br/><br/>

<button onClick={()=>navigate("/register")}>
Register
</button>

</div>

)

}

export default Login