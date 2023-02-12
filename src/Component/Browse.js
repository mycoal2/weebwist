import React, { useState } from 'react'


export const Browse = ({searchedList, setSearchedList}) => {
    const [searchedList1, setSearchedList1] = useState([]);

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
    const result = [jsonData].map(element => element.data.Page.media[0].title);
    // const result1 = [jsonData].map(element => Object.keys(element.data.Page.media).length);
    // console.log(result);
    // console.log(variables);
    // console.log(result1);
    let jsonMedia = jsonData.data.Page.media;
    console.log(jsonMedia.length + " length ");
    console.log(jsonMedia);
    jsonMedia.map(element => {
        setSearchedList1([...searchedList1, {coverImage:element.coverImage, 
            title:element.title.romaji,
            rating:element.averageScore,
            type:element.type,
            status:element.status,
            siteUrl:element.siteUrl,
            id:element.id,
            genres:element.genres,
            popularity:element.popularity 
            }]);
        })
    // for (let i = 0; i < jsonMedia.length; i++) {
    //     setSearchedList1([...searchedList1, { coverImage:jsonMedia[i].coverImage, 
    //     //                                     title:jsonMedia[i].title.romaji,
    //     //                                     rating:jsonMedia[i].averageScore,
    //     //                                     type:jsonMedia[i].type,
    //     //                                     status:jsonMedia[i].status,
    //     //                                     siteUrl:jsonMedia[i].siteUrl,
    //     //                                     id:jsonMedia[i].id,
    //     //                                     genres:jsonMedia[i].genres,
    //     //                                     popularity:jsonMedia[i].popularity }]);
    //     console.log(jsonMedia[i]);
    //     console.log("list of i")                                    
    // }
    // console.log(jsonData);
    console.log(searchedList1);
    // console.log(jsonData.data.Page.media[0].coverImage.extraLarge);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

// const [inputSearch, setInputSearch] = useState("")

// const handleInputSearch = (event) => {
//     setInputSearch(event.target.value);
//     setVariable(inputSearch);
// }

// function setVariable(title) {
//     variables = {
//         search: title,
//         page: 1,
//         perPage: 5,
//     };
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: query,
//             variables: variables
//         })
//     };
//     console.log(title);
//     console.log(variables);
//     console.log(options);
//     //searchAnime();
// }

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
            {searchedList1.length > 0 ? ( 
                <ul className='searchUl'> {searchedList1.map((value) =>
                    <div className='entryRow'> 
                        <div className='entryRowLeft'>
                            <div className='rowCoverImage' style={{backgroundImage:`url(${value.coverImage.extraLarge})`}}> </div>
                            <div className='rowTitle'><a href={value.siteUrl}> {value.title} </a></div>
                        </div>
                            <div className='entryRowRight'>
                            <div className='rowRatings'>Ratings here</div>
                            <div className='rowType'>Type here</div>
                            <div className='rowStatus'>Status here</div>
                        </div>
                    </div>)
}
                </ul>
                ) : (<div></div>)
            }
        </div>
    </div>
  )
}
