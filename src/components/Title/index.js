import React from "react";
import "./styles.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Title(props) {
    return (
        <header className="Header"><h1 className="Title">{props.children}</h1><p id="innerText">Click on an image to earn points. Be careful not to click on the same image twice!</p></header>
    )
};

export default Title;