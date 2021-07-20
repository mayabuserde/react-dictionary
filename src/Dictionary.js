import React, {useState} from "react";

export default function Dictionary() {

    let [keyword, setKeyword] = useState('');
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

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
        </form></div>
       
    )
}