import React from 'react';
import "./Synonyms.css"

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length === 1) {
    return (
      <div className="Synonyms">
        <h6>Synonym: </h6>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
  if (props.synonyms && props.synonyms.length > 1) {
    return (
      <div className="Synonyms">
        <h6>Synonyms: </h6>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}