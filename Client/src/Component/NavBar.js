import React from 'react'

export const NavBar = ({changeTab}) => {
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
          <flex className="navbarFlex">
          <li className="navbarItem" onClick={() => {changeTab("Signup")}} id= "Signup"> Signup </li>
          <li className="navbarItem"><button> Icon1</button></li>
          </flex>
        </ul>
    </nav>
  )
}
