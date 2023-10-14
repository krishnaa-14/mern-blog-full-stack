import {useState} from 'react';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const response = await fetch("http://localhost:4000/register", {
            method : "POST", 
            body : JSON.stringify({username, password}),
            headers : {
                'Content-Type' : "application/json"
            }
        })

        console.log(response);
    }

    return (
        <div className = "register">
            <h1> Sign Up</h1>
            <input type = "text" placeholder = "Username" value = {username} onChange = {(e) => setUsername(e.target.value)}></input>
            <input type = "password" placeholder = "Password" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
            <button onClick = {() => handleSignup()}> Sign Up</button>
        </div>
    )
}

export default Register;