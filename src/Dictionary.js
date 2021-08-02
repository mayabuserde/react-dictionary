import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css"

export default function Dictionary() {

    let [results, setResults] = useState(null);
    let [keyword, setKeyword] = useState('');
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    
    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        let pexelApiKey = '563492ad6f9170000100000177d6e9f2403d4f2abbe9cb13dd3ecdf2';
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
        axios.get(pexelApiUrl, { headers: {"Authorization" : `Bearer ${pexelApiKey}`} }).then(handlePexelResponse);
    }
    
    function updateKeyword(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                <h1>Dictionary</h1>
                <p>Which word are you looking for?</p>
    
                <input className="form-control me-3" type="search" placeholder="Type a word..." onChange={updateKeyword} />
                </form>
                <p className="hint">Try searching for: sunset, water, orchid</p>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
       </div>
    )
}