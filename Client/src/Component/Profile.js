import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = (user) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({  username:user.user, 
                                      password:"",
                                      email:"",
                                      favourite:"",
  })

    useEffect(() => {
      if(info.username === "") {
        navigate('/Login')
        return;
      }
      console.log(user.user);
      Axios.get("http://localhost:3001/account").then((response) => {
          let user1 = response.data.find(acc => acc.username === user.user);
          setInfo({...info ,email: user1.email})
          console.log(user1);
        })
    }, []);

  return (
    <>
    <div>
    <label>User Name</label>
    <label>{info.username}</label>
    </div>
    <div>
    <label>email</label>
    <label>{info.email}</label>
    </div>
    <div>
    <label>Favourite</label>
    <label>{info.favourite}</label>
    </div>
    </>
  )
}
