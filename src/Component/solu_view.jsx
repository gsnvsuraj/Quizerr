import React, { Component } from 'react';

class Solutions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: this.props.question,
            choosen: this.props.choosen,
            correctAns: this.props.correctAns,
            corClass: "p-2 m-2 corClass",
            wrgClass: "p-2 m-2 wrgClass"
        }
    }
    
    render() { 
        return (
            <div className="container">
            <div className="col-sm-12 col-lg-12 p-2 m-2">
                <div className={this.state.choosen===this.state.correctAns?this.state.corClass:this.state.wrgClass}>
                    <div className="p-2">
                        <b>{this.state.question}</b>
                    </div>
                    <div className="p-2">
                        <b>Choosen Option : </b>{this.state.choosen}
                    </div>
                    <div className="p-2">
                        <b>Correct Answer : </b>{this.state.correctAns}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Solutions;