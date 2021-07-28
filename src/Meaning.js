import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
      <div className="Meaning">
          <h3 className="text-info">{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map((definition, index) => {
             return (
                  <div key={index}>
                  <p>{index+1}. {definition.definition}</p> 
                            <p><em>{definition.example}</em></p>
                            <Synonyms synonyms={definition.synonyms} />
              </div>)
          })}  
      </div>
    );
}