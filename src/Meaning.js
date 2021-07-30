import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
    return (
      <section className="Meaning">
          <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map((definition, index) => {
             return (
                  <div key={index}>
                  <p className="definition">{index+1}. {definition.definition}</p> 
                            <p className="example">{definition.example}</p>
                            <Synonyms synonyms={definition.synonyms} />
              </div>)
          })}  
      </section>
    );
}