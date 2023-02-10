import React, { useState } from 'react'


export const Popular = ({searching}) => {
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
            title {
                romaji
                english
                native
            }
        }
    }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {
    search: "One piece",
    page: 1,
    perPage: 3,
};

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
    const result = [jsonData].map(element => element.data.Page.media[0].title.english);
    const result1 = [jsonData].map(element => Object.keys(element.data.Page.media).length);
    console.log(result);
    // console.log(result1);
    console.log(jsonData);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

const [inputSearch, setInputSearch] = useState("")

const handleInputSearch = (event) => {
    setInputSearch(event.target.value);
    setVariable(inputSearch);
}

function setVariable(title) {
    variables = {
        search: title,
        page: 1,
        perPage: 3,
    };
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
    console.log(title);
    console.log(variables);
    console.log(options);
    searchAnime();
}

  return (
  <div>
        <div>Popular</div>
        <div>
            <input className='inputSearch' placeholder='Search Here' value={inputSearch} onChange={handleInputSearch}></input>
            <button onClick={()=>searchAnime()}>add</button>
        </div>
    </div>
  )
}
