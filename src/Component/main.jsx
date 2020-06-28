import React, { Component } from 'react';
import Menu from './menu';
import Question from './question';
import { getQuestions } from './ques_list';
import Scorecard from './scorecard';

class Main extends Component {
    constructor(props) {
        super(props);
        console.log("Main constructor running");
    

        this.state = { 
            questions:[],
            points: 0,
            noQuestions: 6,
            topic: "naruto",
            title: "anime",
            responses: -1,
            solutions: []
        }
    }

    refresher() {
        this.setState({
            points: 0,
            responses: 0,
            solutions: []
        });
    }

    retake() {
        this.setState({
            points: 0,
            responses: -1,
            solutions: []
        });
    }

    score(pnt,res) {
        this.setState({
            points: this.state.points + pnt,
            responses: this.state.responses + res
        });
    }
    

    changeTopic(name, topics) {
        const ques = getQuestions(topics, this.state.noQuestions);

        this.setState({
            topic: topics,
            title: name,
            questions: ques
        });
        this.refresher();
    }

    setSolutions(ques, choose, correct) {
        const solu = this.state.solutions;
        solu.push({question:ques, choosen: choose, correctAns: correct});

        this.setState({
            solutions: solu
        });
    }

    render() { 
        return ( 
            <div>
                <div>
                    {
                        this.state.responses < 0 ?
                        (<Menu changeTopic={(name, topics) => this.changeTopic(name, topics)} />) : null
                    }
                </div>

                <div>
                    {
                        this.state.responses >= 0 ? 
                        (<h2 className="p-2 m-5"><strong>{this.state.title} Quiz</strong></h2>) : null
                    }
                </div>

                <div>
                    {
                        this.state.responses >= 0 && this.state.responses < this.state.noQuestions ? 
                        (this.state.questions.map(({question, options, answer, id}) => 
                        <Question question={question} options={options} answer={answer} key={id}
                        score={(pnt,res) => this.score(pnt,res)} setSolutions={(ques, choose, correct) =>
                        this.setSolutions(ques, choose, correct)} /> )) : null
                    }
                </div>

                <div>
                    {
                        this.state.responses === this.state.noQuestions ?
                        (<Scorecard score={this.state.points} noQuestions={this.state.noQuestions}
                        retake={() => this.retake()} title={this.state.title}
                        solutions={this.state.solutions} />):null
                    }
                </div>
            </div>
         );
    }
}
 
export default Main;