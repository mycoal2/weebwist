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
const [variables, setVariables] = useState({search: "", page: 1, perPage: 2});
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
    // console.log(jsonMedia);
    setSearchedList([/*...searchedList,*/ jsonMedia]); //comment to show only 1 search result at a time.
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
        <div className='searchGrid'>
            <div className='searchGridLeft'></div>
            <div className='searchGridMiddle'>
                <div className='searchList'>
                    <div className='listHeader'>
                            <div className='coverImage'></div>
                            <div className='title'>Title</div>
                            <div className='ratings'>Rating</div>
                            <div className='type'>Type</div>
                            <div className='status'>Status</div>
                    </div>
                </div>
                    {searchedList.length > 0 ? ( 
                        <div className='searchEntries'> {searchedList.map((value) => value.map((val) =>   //searchedList.reverse().map((value)
                            <div className='entryRow'> 
                                    <div className='rowCoverImage' style={{backgroundImage:`url(${val.coverImage.extraLarge})`}}> </div>
                                    <div className='rowTitle'><a href={val.siteUrl}> {val.title.romaji} </a></div>
                                    <div className='rowRatings'>{val.averageScore}</div>
                                    <div className='rowType'>{val.type}</div>
                                    <div className='rowStatus'>{val.status}</div>
                            </div>))
                        }
                        </div>
                        ) : (<div></div>)
                    }
            </div>
            <div className='searchGridRight'></div>
        </div>    
    </div>
  )
}
