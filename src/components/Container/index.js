import React, { Component } from "react";
import Page from '../Page.js/index.js';
import Title from '../../components/Title/index';
import Characters from '../../chars.json';
import NavBar from '../../components/NavBar/index';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Logic extends Component {
    // Setting the component's initial state
    state = {
        characters: Characters,
        idClicked: [],
        score: 0,
        highScore: 0
    };

    // This will hold each character from array, and allow you to use grid system.Not used no more.
    element = this.state.characters.map(chars => {
        return <Col key={chars.id}><Page key={chars.id} {...chars} handleClick={() => this.handleClick(chars.id)} /></Col>
    })

    idsClicked = []

    //This will randomize your array
    arrayShuffle = function (arr) {
        console.log(this.state.characters)
        let newPos, temp;
        for (let i = arr.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1))
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
        console.log(arr)
        return arr
    }

    handleClick = (id) => {
        // If the score is greater than the highscore, that is your new highscore
        //if (this.state.idClicked === id) {
            var arraz = this.state.idClicked;
            console.log(arraz)
            if(arraz.includes(id)){
            if (this.state.score > this.state.highScore) {
                this.setState({
                    idClicked: [],
                    score: 0,
                    highScore: this.state.score
                })
                this.idsClicked = []
            }
            // else just reset the scores
            else {
                console.log("LOSE")
                this.setState({
                    idClicked: [],
                    score: 0
                })
                this.idsClicked = []
            }

        }
        else {
            this.idsClicked.push(id)
            this.setState({
                characters: this.arrayShuffle(this.state.characters),
                idClicked: this.idsClicked,
                score: this.state.score + 1
            })
        }
    };



    render() {
        return (
            <div>
                <NavBar highscore={this.state.highScore} score={this.state.score} />
                <Title>CLICKY GAME</Title>
                <Row>
                {this.state.characters.map(chars => {
                    return <Col xs="6" sm="3" key={chars.id}><Page key={chars.id} {...chars} handleClick={() => this.handleClick(chars.id)} /></Col>
                })}
                </Row>
            </div>
        );
    }
}

export default Logic;
