import React, { useState } from 'react'


export const Browse = ({searchedList, setSearchedList}) => {
    var query = `
    query ($id: Int, $search: String, $page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, search: $search) {
                id
                type
                averageScore
                meanScore
                popularity
                genres
                synonyms
                siteUrl
                status
                coverImage {
                    extraLarge
                }
                title {
                    romaji
                    english
                    native
                }
                characters(page:1) {
                    edges {
                        node {
                            id
                            image {
                                large
                            }
                            name {
                                full
                                native
                            } 
                        }
                        role
                    }
                }
            }
        }
    }
    `;
const [variables, setVariables] = useState({search: "", page: 1, perPage: 5});
const handleUserInput = (event) => {
    const {search, value} = event.target;
    setVariables(prevState => ({
        ...prevState, search:value
    }));
    console.log(variables)
}

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
function searchAnime() {
    console.log(variables.search.size);
    if(variables.search.size <= 3) {
        return;
    }
    fetch(url, options).then(handleResponse)
                    .then(handleData)
                    .catch(handleError);
}
function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}


function handleData(jsonData) {
    let jsonMedia = jsonData.data.Page.media;
    // console.log(jsonData);
    // console.log(jsonMedia)
    setSearchedList([...searchedList, jsonMedia]);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

  return (
  <div>
        <h2> Browse </h2>
        <div className='searchBar'>
            <input className='userSearch' placeholder='Search Here' value={variables.search} type="text" onChange={handleUserInput}></input>
            <button onClick={()=>searchAnime()}> Search </button>
        </div>
        <div className='searchList'>
            <div className='listHeader'>
                <div className='listHeaderLeft'>
                    <div className='coverImage'></div>
                    <div className='title'>Title</div>
                </div>
                <div className='listHeaderRight'>
                    <div className='ratings'>Rating</div>
                    <div className='type'>Type</div>
                    <div className='status'>Status</div>
                </div>
            </div>
        </div>
        <div className='searchEntries'>
            {searchedList.length > 0 ? ( 
                <ul className='searchUl'> {searchedList.map((value) => value.map((val) => 
                    <div className='entryRow'> 
                        <div className='entryRowLeft'>
                            <div className='rowCoverImage' style={{backgroundImage:`url(${val.coverImage.extraLarge})`}}> </div>
                            <div className='rowTitle'><a href={val.siteUrl}> {val.title.romaji} </a></div>
                        </div>
                            <div className='entryRowRight'>
                            <div className='rowRatings'>Ratings here</div>
                            <div className='rowType'>Type here</div>
                            <div className='rowStatus'>Status here</div>
                        </div>
                    </div>))
                }
                </ul>
                ) : (<div></div>)
            }
        </div>
    </div>
  )
}
