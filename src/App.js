import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavBar } from './Component/NavBar';
import { Weeb } from './Component/Weeb';
import { Home } from './Component/Home';
import { Popular } from './Component/Popular';

function App() {
  const [currentTab, setCurrentTab] = useState("Home")
  const [mangaList, setMangaList] = useState([])
  const [animeList, setAnimeList] = useState([])
  const [search, setSearch] = useState([])


  return (
    <div>
      <div className='container'>
        <NavBar changeTab={(changeTab) => setCurrentTab(changeTab)}></NavBar>

        {currentTab === "Home" ? <Home></Home> : (<></>) }
        {currentTab === "Manga" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Anime" ? <Weeb manga={animeList} setManga={setAnimeList} type={"Anime"}></Weeb> : (<></>) }
        {currentTab === "Weeb" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Popular" ? <Popular search={search}></Popular> : (<></>) }
      </div>
    </div>
  );
}

export default App;
