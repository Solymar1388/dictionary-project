import React, { useState } from "react"
import axios from "axios"
import Results from "./Results"
import Photos from './Photos';
import "./Dictionary.css"


export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword)
let [results, setResults] = useState(null)
let [loaded, setLoaded] = useState(false)
let [photos, setPhotos] = useState(null)

function handleResponse(response){
setResults(response.data[0])
}

function handlePexelResponse(response){
setPhotos(response.data.photos);
}

function search() {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelApiKey = '563492ad6f91700001000001658971d781ad4eaa812b443d2b855f7a';
  let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = { Authorization: `Bearer ${pexelApiKey}` };
  axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
  
}

function handleSubmit(event) {
event.preventDefault();
search()
}

function handleKeywordChange(event) {
setKeyword(event.target.value)
}

function load(){
    setLoaded(true)
    search()
}

if(loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Enter a word..."
              // defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
} else {
    load() 
    return "Loading..."
}
}