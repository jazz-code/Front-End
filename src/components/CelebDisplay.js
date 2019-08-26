import React, {useState} from 'react';
import {Animated} from "react-animated-css";

const CelebDisplay = props => {

    return ( 
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div className="celeb-container">
    <h2> props.celeb.name! </h2>
    {/* <img src={props.celeb.img} alt={props.celeb.name}/> */}
    <h4> short description? </h4>
    <h4> birth year </h4>
    <button>Alive!</button>
    <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}>
    <button>Dead!</button>
    </Animated>
    <p>Current Score props.score</p>
    
    </div>
    </Animated>
    )
}

export default CelebDisplay