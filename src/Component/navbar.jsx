import React, { Component } from 'react';
import sun from './img/sun.png';
import moon from './img/moon.png';

class Navbar extends Component {

    darkMode() {
        let ele = document.body;
        ele.classList.toggle('darkMode');
    
        let imgSrc = document.getElementById("imgDark");
        if (imgSrc.src === sun)
          imgSrc.src = moon;
        else
          imgSrc.src = sun;
    }

    render() { 
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <div className="navbar-header">
                    <h1 className="quizHead navbar-brand">ANIME OUIZERR</h1>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><img id="imgDark" className="darkImg toggle" src={sun} alt="sun" width="50px" onClick={this.darkMode} /></li>
                </ul>
                </div>
            </nav> 
        );
    }
}
 
export default Navbar;