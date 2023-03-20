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
  const [mangaList, setMangaList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [user, setUser] = useState(0)
  


  return (
    <>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route path="/"         element={<Home/>}/>
        <Route path="/Manga"    element={<Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb>}/>
        <Route path="/Anime"    element={<Weeb manga={animeList} setManga={setAnimeList} type={"Anime"}></Weeb>}/>
        <Route path="/Weeb"     element={<Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb>}/>
        <Route path="/Browse"   element={<Browse searchedList={searchedList} setSearchedList={setSearchedList}></Browse>}/>
        <Route path="/Signup"   element={<Signup setUser={setUser}></Signup>}/>
        <Route path="/Login"    element={<Login setUser={setUser}></Login>}/>
        <Route path="/Profile"  element={<Profile setUser={setUser}></Profile>}/>
        <Route path="*"         element={<NotFound></NotFound>}/>
      </Routes> 
      {/* <div className='container'>
        <NavBar changeTab={(changeTab) => setCurrentTab(changeTab)} user={user}></NavBar>

        {currentTab === "Home" ? <Home></Home> : (<></>) }
        {currentTab === "Manga" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Anime" ? <Weeb manga={animeList} setManga={setAnimeList} type={"Anime"}></Weeb> : (<></>) }
        {currentTab === "Weeb" ? <Weeb manga={mangaList} setManga={setMangaList} type={"Manga"}></Weeb> : (<></>) }
        {currentTab === "Browse" ? <Browse searchedList={searchedList} setSearchedList={setSearchedList}></Browse> : (<></>) }
        {currentTab === "Signup" ? <Signup setUser={setUser} setCurrentTab={setCurrentTab}></Signup> : (<></>) }
        {currentTab === "Login" ? <Login setUser={setUser} setCurrentTab={setCurrentTab}></Login> : (<></>) }
        {currentTab === "Profile" ? <Profile setUser={setUser} setCurrentTab={setCurrentTab}></Profile> : (<></>) }
      </div> */}
    </>
  );
}

export default App;
