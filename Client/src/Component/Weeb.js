import React, { useState } from 'react'

export const Weeb = ({manga, setManga, type}) => {
    
    const [title, setTitle] = useState("")
    const [score, setScore] = useState("")

    const addManga = () => {
        if(isNaN(score) || score > 10){
            return;
        }
        if(title==="" || score==="") {
            return;
        }
        setManga([...manga, {title:title, score:score}]);
        setTitle("");
        setScore("");
        console.log(manga);
    }
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleScore = (event) => {
        setScore(event.target.value);
    }
    const deleteManga = (title) => {
        setManga(manga.filter((value) => value.title !== title))
    }
    

  return (
    <div>
        <h2 className='header-list'>{type}</h2>
        <div className="box-name">
            <label>  Title  </label>
            <label>  Score/10  </label>
        </div>
        <div className="input-box">
            <input className="inputTitle" placeholder="Grand Blue" value = {title} onChange={handleTitle}></input>
            <input className="inputScore" placeholder="10" value = {score} onChange={handleScore}></input>
            <button className="add-button" onClick={addManga}>Add</button>
        </div>
        <h2 className="tab-title"> {type} List </h2>

        <div className='List'>
            {manga.length > 0 ? 
            (<ul>
                {manga.map((value) => 
                <li className='list-item' key={value.title}>
                    <span>{value.title}</span>
                    <span>{value.score}</span>
                    <span onClick={() => deleteManga(value.title)} className='delete-button'><button> X</button></span>
                    
                </li>)
                }
            </ul>) 
            : (<div> List is empty </div>)
            }
            
        </div>
    </div>
  );
};
