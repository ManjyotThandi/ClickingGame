import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css'
function NavBar(props) {
    return (
        <>
            <Navbar collapseOnSelect className = "NavBar" sticky="top" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <div className = "Text" >Clicking Game</div>
                    <div className = "Text" >Score: {props.score}</div>
                    <div className = "Text" >HighScore: {props.highscore}</div>
                </Nav>
            </Navbar>
        </>
    )
};

export default NavBar;