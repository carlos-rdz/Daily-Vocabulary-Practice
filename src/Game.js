import React, {Component} from 'react';
import Words from './Words';
import Definitions from './Definitions';
require('dotenv').config()

class Game extends Component {

componentDidMount() {

    // this.setState({ someProperty: { ...this.state.someProperty, flag: false} });

    // const Ourlist = this.state.words

    // Ourlist.forEach((Word) => {
    //     this.setState({words : {...this.state.words, create : "test" } });
    // })


    //  need to fix the key
    fetch('https://wordsapiv1.p.mashape.com/words/?random=true' ,{ headers:{
        'X-RapidAPI-Key': process.env.WORDSKEY
      }})
        .then(r => r.json())
        .then(console.log)


        
}

constructor(props) {
    super(props);
    this.state = {
        currentword : "",
        currentdef : " ",
        words : [
        {   id : 1,
            word : 'create', 
            def : "bring (something) into existence.",
            selected : true
        },
        {   id : 2,
            word : 'destroy', 
            def : "put an end to the existence of (something) by damaging or attacking it",
            selected : true
        },
        {   id : 1,
            word : 'preserve', 
            def : "maintain (something) in its original or existing state.",
            selected : false
        },
        ]}
}


render() {
    
    if (this.state.currentdef === this.state.currentword) {
       console.log("They equal")
       
    }

    return (
        <div className="container">
            <div className="row">
                <Words
                words = {this.state.words}
                changeWord = {this._handleWordCLick}
                />
                <Definitions
                words = {this.state.words}
                changeDef = {this._handleDefCLick}
            />
            </div>

        </div>
    )
}



_handleWordCLick = (event) =>  {
    this.setState({currentword : event})
}
_handleDefCLick = (event) =>  {
    this.setState({currentdef : event})
}




}


export default Game;
