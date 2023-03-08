import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Signup = ({setUser, setCurrentTab}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/account").then((response) => {
            setAccount(response.data);
        });
    }, []);

    const createAcc = () => {
        Axios.post("http://localhost:3001/signup", {username:username, password:password,
        }).then(() => {
            alert("Sucess");
            setUser(username);
            setCurrentTab("Home");
        });
        setUsername('');
        setAccount('');
    }

  return (
    <section className='signuptab'>
        <form className='signuptab2' onSubmit={createAcc}>
            <label>Username</label>
            <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
            <label>Password</label>
            <input secureTextEntry={true} type="password" onChange={(event) => {setPassword(event.target.value)}}></input>
            <button onClick={createAcc}> Signup </button>
        </form>
        {/* <div>
            {account.map((value) => 
                <div>
                    <div>{value.username}</div>
                    <div>{value.password}</div>
                </div>
            )}
        </div> */}
    </section>
  )
}
