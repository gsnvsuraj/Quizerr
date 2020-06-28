import React, { Component } from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
    

        this.state = { 
            question: this.props.question,
            options: this.shuffleArray(this.props.options),
            answer: this.props.answer,
            qpoints: 1,
            buttonClass: "btn btn-info m-2"
        }
    }

    shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }

    correct(selected) {
        const k= [selected.value];
        let bclass = "btn btn-info m-2";
        const pnt = this.state.qpoints;        
        
        if (selected.value === this.state.answer) {
            bclass= "btn btn-success m-2";
            this.props.score(pnt, pnt);
        }
        else {
            bclass= "btn btn-danger m-2";
            this.props.score(0, pnt);
        }

        this.setState({
            options: k,
            buttonClass: bclass,
            qpoints: 0
        });

        this.props.setSolutions(this.state.question, selected.value, this.state.answer);
    }
    
    render() { 
        return (
            <div>
                <div className="p-4 m-2">
                    <h2>{this.state.question}</h2>
                    {this.state.options.map(value =>
                        <button className={this.state.buttonClass} onClick={() => this.correct({value})} key={value}>{value}</button>)}
                </div>
            </div>
        );
    }
}
 
export default Question;