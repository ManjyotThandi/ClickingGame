import React, { Component } from "react";
import "./styles.css";


function CharCard(props) {
  return (
    <div>

    <div onClick={props.handleClick} className="card">
      <div data-id={props.id} className="img-container">
        <img 
          alt="LOL"
          src={props.image}
        />
      </div>
    </div>
    </div>
  );
}

export default CharCard;