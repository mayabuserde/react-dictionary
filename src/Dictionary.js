import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

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
        <div className="Dictionary container p-3"><h1>Dictionary</h1>
        <p>Which word are you looking for?</p>
        <form className="d-flex" onSubmit={search}>
        <input className="form-control me-3" type="search" placeholder="Type a word..." onChange={updateKeyword} />
        <input type="submit" className="btn btn-outline-info" value="Search" />
        </form>
        <Results results={results}/>
        </div>
       
    )
}