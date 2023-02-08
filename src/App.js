import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { NavBar } from './Component/NavBar';
import { About } from './Component/About';
import { Home } from './Component/Home';
import { Contact } from './Component/Contact';
import { Projects } from './Component/Projects';
import { Weeb } from './Component/Weeb';

function App() {
  const [currentTab, setCurrentTab] = useState("Home")
  const [mangaList, setMangaList] = useState([])

  return (
    <div className="App">
      <div className = "container">
        <NavBar changeTab={(input) => setCurrentTab(input)}></NavBar>

        {currentTab === "Home" ? <Home></Home> : (<></>) }
        {currentTab === "About" ? <About></About> : (<></>) }
        {currentTab === "Projects" ? <Projects></Projects> : (<></>) }
        {currentTab === "Contact" ? <Contact></Contact> : (<></>) }
        {currentTab === "Weeb" ? <Weeb manga={mangaList} setManga={setMangaList} ></Weeb> : (<></>) }
      </div>
    </div>
  );
}

export default App;
