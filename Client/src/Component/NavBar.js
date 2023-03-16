import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const NavBar = ({changeTab, user}) => {
  const [account, setAccount] = useState([]);
  useEffect(() => {
    console.log(user);
    if(user === 0) {
      return;
    }
    Axios.get("http://localhost:3001/account").then((response) => {
        setAccount(response.data.find(acc => acc.id === user).username);
        console.log(response.data.find(acc => acc.id === user).username);
    });
}, [], user);

  return (
    <nav className='nav'>
        <ul className='navbarList'>
          <flex className="navbarLogo" onClick={() => {changeTab("Home")}} id= "Home">
            WeebWist
          </flex>
          <flex className="navbarFlex">    
            <li className="navbarItem" onClick={() => {changeTab("Manga")}} id= "Manga"> Manga </li>
            <li className="navbarItem" onClick={() => {changeTab("Anime")}} id= "Anime"> Anime </li>
            <li className="navbarItem" onClick={() => {changeTab("Weeb")}} id= "Weeb"> Weeb </li>
            <li className="navbarItem" onClick={() => {changeTab("Browse")}} id= "Browse"> Browse </li>
          </flex>
          {user === 0 ? 
          <flex className="navbarFlex">
            <li className="navbarItem" onClick={() => {changeTab("Login")}} id= "Login"> Login </li>
            <li className="navbarItem" onClick={() => {changeTab("Signup")}} id= "Signup"> Signup </li>
          </flex>
          : 
          <flex className="navbarFlex">
            <li className="navbarItem" onClick={() => {changeTab("Profile")}} id= "Profile"> {user} </li>
          </flex>
          }
        </ul>
    </nav>
  )
}
