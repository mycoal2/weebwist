import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const NavBar = ({changeTab, user}) => {
  const [account, setAccount] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/account").then((response) => {
        // setAccount(response.data);
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
          {user === "0" ? 
          <flex className="navbarFlex">
          <li className="navbarItem" onClick={() => {changeTab("Signup")}} id= "Login"> Login </li>
          <li className="navbarItem" onClick={() => {changeTab("Signup")}} id= "Signup"> Signup </li>
          </flex>
          : 
          <flex className="navbarFlex">
          <li className="navbarItem" onClick={() => {changeTab("Home")}} id= "Profile"> {user.username} </li>
          </flex>
          }
        </ul>
    </nav>
  )
}
