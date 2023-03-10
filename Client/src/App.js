import './App.css';
import './Component/Browse.css';
import { useState } from 'react';
import { NavBar } from './Component/NavBar';
import { Weeb } from './Component/Weeb';
import { Home } from './Component/Home';
import { Browse } from './Component/Browse';
import { Signup } from './Component/Signup';
import { Login } from './Component/Login';
import { Profile } from './Component/Profile';

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [mangaList, setMangaList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [user, setUser] = useState("0")
  


  return (
    <div>
      <div className='container'>
        <NavBar changeTab={(changeTab) => setCurrentTab(changeTab)} user={user}></NavBar>

        {currentTab === "Home" ? <Home></Home> : (<></>) }
        {currentTab === "Manga" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Anime" ? <Weeb manga={animeList} setManga={setAnimeList} type={"Anime"}></Weeb> : (<></>) }
        {currentTab === "Weeb" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Browse" ? <Browse searchedList={searchedList} setSearchedList={setSearchedList}></Browse> : (<></>) }
        {currentTab === "Signup" ? <Signup setUser={setUser} setCurrentTab={setCurrentTab}></Signup> : (<></>) }
        {currentTab === "Login" ? <Login setUser={setUser} setCurrentTab={setCurrentTab}></Login> : (<></>) }
        {currentTab === "Profile" ? <Profile setUser={setUser} setCurrentTab={setCurrentTab}></Profile> : (<></>) }
      </div>
    </div>
  );
}

export default App;
