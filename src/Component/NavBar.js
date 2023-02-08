import React from 'react'

export const NavBar = ({changeTab}) => {
  return (
    <nav>
        <ul className="nav_list">
          <flex className="navlogo" onClick={() => {changeTab("Home")}} id= "Home">
            WeebWist
          </flex>
          <flex className="navflex">    
            <li className="flex-nav" onClick={() => {changeTab("Home")}} id= "Home"> Home </li>
            <li className="flex-nav" onClick={() => {changeTab("About")}} id= "About"> About </li>
            <li className="flex-nav" onClick={() => {changeTab("Projects")}} id= "Projects"> Projects </li>
            <li className="flex-nav" onClick={() => {changeTab("Contact")}} id= "Contact"> Contact </li>
            <li className="flex-nav" onClick={() => {changeTab("Weeb")}} id= "Weeb"> Weeb </li>
          </flex>
          <flex className="navflex">
            <li className="flex-nav"><button> Icon1</button></li>
            <li className="flex-nav"><button> Icon1</button></li>
          </flex>
        </ul>
    </nav>
  )
}
