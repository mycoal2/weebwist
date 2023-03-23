import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [account, setAccount] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/account").then((response) => {
            const user = response.data.map(res => res.username)
            setAccount(user);
            // console.log(user);
        });
    }, []);

    // const handleEmail = () => {
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     if(re.test(email)) {
    //         return;
    //     } else {
    //         setError("Invalid Email")
    //     }
    // }

    const createAcc = (event) => {
        event.preventDefault();
        if(username === "") {
            setError("username is empty");
            return;
        } else if (password === "") {
            setError("password is empty");
            return;
        } else if (email === "") {
            setError("email is empty");
            return;
        }

        if(account.includes(username)) {
            setError("Username already taken")
        } else {
            Axios.post("http://localhost:3001/signup", {username:username, password:password, email:email,
            }).then(() => {
                alert("Sucess");
                navigate("/Login");
                // setUser(username);   
            });
            setUsername("");
            setAccount("");
            setEmail("");
            setError("");
        }
    }

  return (
    <>
        <form className='signuptab2'>
            <label>
                <p>Username</p>
                <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
            </label>
            <label>
                <p>Password</p>
                <input secureTextEntry={true} type="password" onChange={(event) => {setPassword(event.target.value)}}></input>
            </label>
            <label>
                <p>Email</p>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}}></input>
            </label>
            <button onClick={createAcc}> Signup </button>
            {error === "" ? <></>
                : <div> {error} </div>
            }
        </form>
    </>
  )
}
