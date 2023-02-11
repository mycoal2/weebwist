import React, { useEffect, useState } from 'react'


export const Browse = ({searching}) => {
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
// Define our query variables and values that will be used in the query request
// var variables = {
//     search: "One piece",
//     page: 1,
//     perPage: 5,
// };

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
    console.log(result);
    console.log(variables);
    // console.log(result1);
    console.log(jsonData);
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
        <ul className='searchList'>
            <li> Image 
            </li>
            <li> Title
            </li>
            <li> Type
            </li>
            <li> meanScore
            </li>
            <li> Genres
            </li>
        </ul>
    </div>
  )
}
