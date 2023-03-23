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
import { Route, Routes} from "react-router-dom";
import { NotFound } from './Component/NotFound';

function App() {
  const [token, setToken] = useState();
  const [mangaList, setMangaList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [user, setUser] = useState("");

  return (
    <>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route path="/"         element={<Home/>}/>
        <Route path="/Manga"    element={<Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb>}/>
        <Route path="/Anime"    element={<Weeb manga={animeList} setManga={setAnimeList} type={"Anime"}></Weeb>}/>
        <Route path="/Weeb"     element={<Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb>}/>
        <Route path="/Browse"   element={<Browse searchedList={searchedList} setSearchedList={setSearchedList}></Browse>}/>
        <Route path="/Signup"   element={<Signup></Signup>}/>
        <Route path="/Login"    element={<Login setUser={setUser}></Login>}/>
        <Route path="/Profile"  element={<Profile user={user}></Profile>}/>
        <Route path="*"         element={<NotFound></NotFound>}/>
      </Routes> 
    </>
  );
}

export default App;
