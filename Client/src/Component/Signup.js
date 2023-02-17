import Axios from 'axios';
import React, { useState } from 'react'

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const createAcc = () => {
        Axios.post("http://localhost:3001/signup", {username:username, password:password,
        }).then(() => {
            console.log("Sucess");
        });
    }

  return (
    <div className='signuptab'>
        <div className='signuptab2'>
            <label>Username</label>
            <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
            <label>Password</label>
            <input type="text" onChange={(event) => {setPassword(event.target.value)}}></input>
            <button onClick={createAcc}> Signup </button>
        </div>
    </div>
  )
}
