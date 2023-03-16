import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Login = ({setUser, setCurrentTab}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const loginAttempt = () => {
      Axios.get("http://localhost:3001/account").then((response) => {
            console.log(response.data);
            if(response.data.find(user => user.username === username.toLowerCase())) {
              console.log("username found");
              let id = response.data.find(user => user.username === username.toLowerCase());
              if(id.password === password) {
                setUser(id);
                setCurrentTab("Home");
              } else {
                setError("Username or password does not match")
              }
            } else {
              setError("username does not exist");
              
            }
      })
    }
  return (
    <div className='signuptab2'>
    <>
        <label>Username</label>
        <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
        <label>Password</label>
        <input secureTextEntry={true} type="password" onChange={(event) => {setPassword(event.target.value)}}></input>
        <button onClick={loginAttempt}> Login </button>
        {error === "" ? <></>
                : <div> {error} </div>
        }
    </>
</div>
  )
}
