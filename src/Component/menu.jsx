import React, { Component } from 'react';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            anime: [
                {name: "Naruto", value: "naruto"},
                {name: "Attack on Titan", value: "aot"},
                {name: "My Hero Academia", value: "mha"},
                {name: "Death Note", value: "dtn"},
                {name: "Parasyte The Maxim", value: "ptm"}
            ]
        }
    }
    
    render() { 
        return (
            <div>
                <div className="p-2 m-5">
                    <h2>Select a Topic</h2>
                </div>

                <div className="container">
                    {
                        this.state.anime.map(({name,value}) => 
                        <button className="btn btn-success p-2 m-2 bwidth col-sm-9 col-md-6 col-lg-6" onClick={() => this.props.changeTopic(name, value)} key={value}>{name}</button>
                        )
                    }
                </div>
            </div>
        );
    }
}
 
export default Menu;