import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Login = ({setUser, setCurrentTab}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginAttempt = () => {

    }
  return (
    <div className='signuptab'>
    <>
        <label>Username</label>
        <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
        <label>Password</label>
        <input secureTextEntry={true} type="password" onChange={(event) => {setPassword(event.target.value)}}></input>
        <button onClick={loginAttempt}> Login </button>
    </>
</div>
  )
}
