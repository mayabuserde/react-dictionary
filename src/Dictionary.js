import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css"

export default function Dictionary() {

    let [results, setResults] = useState(null);
    let [keyword, setKeyword] = useState('');
    
    function handleResponse(response) {
        setResults(response.data[0]);
    }
    
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);

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
       </div>
    )
}