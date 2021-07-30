import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
   if (props.results) { 
       return (
           <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics.map((phonetic, index) => {
                        return (
                            <div key={index}>
                            <Phonetics phonetic={phonetic} />
                            </div>
                                );
                    })}
                </section>
                
                     {props.results.meanings.map((meaning, index) => {
                        return (
                            <div key={index}>
                                <Meaning meaning={meaning} />
                            </div>
                            )
                 })}
                
            </div>       
       );
} else return null;
    
    
    
   
}