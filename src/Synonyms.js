import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms"><span>Similar:</span>
                {props.synonyms.map((synonym, index) => {
                    return <li key={index}>{synonym}</li>
                })}
            </ul>
        )
    } else return null;
}