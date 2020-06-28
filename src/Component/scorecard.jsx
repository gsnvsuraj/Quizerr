import React, { Component } from 'react';
import Solutions from './solu_view';

class Scorecard extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            score: this.props.score,
            title: this.props.title,
            noQuestions: this.props.noQuestions,
            solutions: this.props.solutions,
            showSolu: false
        }
    }

    comment() {
        let com = "";
        const per = (this.state.score*100/this.state.noQuestions).toFixed();

        if (per >= 80) {
            com = "You are a " + this.state.title + " master";
        }
        else if (per >= 40) {
            com = "You have to brush up your knowledge about " + this.state.title;
        }
        else {
            com = "You may have to watch " + this.state.title;
        }

        return com;
    }

    showSol=()=> {
        this.setState({
            showSolu: true
        });
    }
    
    render() { 
        return ( 
            <div>
                <div>
                    <div className="p-2 m-2">
                        <h3>Your Score</h3>
                    </div>
                    <div className="p-2 m-2">
                        <h2><strong>{this.state.score}/{this.state.noQuestions}</strong></h2>
                    </div>
                    <div>
                        <h3>Percentage : {(this.state.score*100/this.state.noQuestions).toFixed()}%</h3>
                        <br />
                        {this.comment()}
                    </div>
                    <button className="btn btn-warning p-2 m-4 text-white" onClick={this.showSol}>View Solution</button>
                    <button className="btn btn-primary p-2 m-4" onClick={this.props.retake}>Retake Quiz</button>
                </div>

                <div>
                    {
                        this.state.showSolu ? 
                        (this.state.solutions.map(({question, choosen, correctAns}) =>
                        <Solutions key={question+correctAns} question={question} choosen={choosen} correctAns={correctAns} />)) : null
                    }
                </div>
            </div>
        );
    }
}
 
export default Scorecard;