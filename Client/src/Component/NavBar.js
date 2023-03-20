import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
//   const [account, setAccount] = useState([]);
//   useEffect(() => {
//     console.log(user);
//     if(user === 0) {
//       return;
//     }
//     Axios.get("http://localhost:3001/account").then((response) => {
//         setAccount(response.data.find(acc => acc.id === user).username);
//         console.log(response.data.find(acc => acc.id === user).username);
//     });
// }, [], user);

  return (
    <nav className='nav'>
        <ul className='navbarList'>
          <flex><NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/"> WeebWist </NavLink>  
          </flex>
          <flex className="navbarFlex">    
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Manga">Manga</NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Anime"> Anime </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Weeb"> Weeb </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Browse"> Browse </NavLink>
          </flex>
          {true ? 
          <flex className="navbarFlex">
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Login"> Login </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Signup"> Signup </NavLink>
          </flex>
          : 
          <flex className="navbarFlex">
            {/* <li className="navbarItem" onClick={() => {changeTab("Profile")}} id= "Profile"><Link to="/Profile"></Link> {user} </li> */}
          </flex>
          }
        </ul>
    </nav>
  )
}
