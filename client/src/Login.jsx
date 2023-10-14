import {useState} from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const handleSignin = async () => {
        const response = await fetch("http://localhost:4000/login", {
            method : "POST", 
            body : JSON.stringify({username, password}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(response.status === 200) {
            alert("Loggged in Successfully");
            setNavigate(true);
        }
        else {
            alert("Log In Failed");
        }
    }

    if(navigate) {
        return <Navigate to = "/"></Navigate>
    }

    return (
        <div className = "register">
            <h1> Sign In</h1>
            <input type = "text" placeholder = "Username" value = {username} onChange = {(e) => setUsername(e.target.value)}></input>
            <input type = "password" placeholder = "Password" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
            <button onClick = {() => handleSignin()}> Sign In</button>
        </div>
    )
}

export default Login;