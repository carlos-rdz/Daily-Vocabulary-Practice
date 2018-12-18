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
        currentWordClass : false,
        currentDefClass : true,
        currentword : "",
        currentdef : " ",
        words : [
        {create : "bring (something) into existence."},
        {destroy : "put an end to the existence of (something) by damaging or attacking it"},
        {preserve : "maintain (something) in its original or existing state."},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_4 : "Def4"},
        {Word_5 : "Def5"}
            ]
        }
}


render() {
    
    if (this.state.currentdef === this.state.currentword) {
       return this.setState({words : [...this.state.words]})
       
    }

    return (
        <div className="container">
            <div className="row">
                <Words
                class = {this.state.currentWordClass}
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
