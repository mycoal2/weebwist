import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from './WeebWLogo.png'

export const NavBar = (user) => {
  
  return (
    <nav className='nav'>
        <ul className='navbarList'>
          <flex className="navbarFlex1"><NavLink style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/"><img className="navbarLogo" src={logo} alt="Logo" /></NavLink>  
          </flex>
          <flex className="navbarFlex">    
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Manga">Manga</NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Anime"> Anime </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Weeb"> Weeb </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Browse"> Browse </NavLink>
          </flex>
          {user.user === "" ? 
          <flex className="navbarFlex">
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Login"> Login </NavLink>
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Signup"> Signup </NavLink>
          </flex>
          : 
          <flex className="navbarFlex">
            {console.log(user.username)}
            <NavLink className="navbarItem" style={({isActive}) => {return isActive ? {'background-color': "hsla(136, 58%, 52%, 0.5)"} : {}}} to="/Profile">{user.user} </NavLink>
          </flex>
          }
        </ul>
    </nav>
  )
}
