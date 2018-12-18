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
            wordsel : false,
            defsel : false
        },
        {   id : 2,
            word : 'destroy', 
            def : "put an end to the existence of (something) by damaging or attacking it",
            wordsel : false,
            defsel : false
        },
        {   id : 1,
            word : 'preserve', 
            def : "maintain (something) in its original or existing state.",
            wordsel : false,
            defsel : false
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



_handleWordCLick = (wordObject) =>  {
    this.setState({currentword : wordObject});
    this.state.words.forEach((wordObj) => {
        wordObj.wordsel = false
    })
    // this.setState({words : [...this.state.words, this.state.words[1].selected = false ]})
    wordObject.wordsel ? wordObject.wordsel=false : wordObject.wordsel=true
}
_handleDefCLick = (wordObject) =>  {
    this.setState({currentdef : wordObject})
    this.state.words.forEach((wordObj) => {
        wordObj.defsel = false
    })
    wordObject.defsel ? wordObject.defsel=false : wordObject.defsel=true
}




}


export default Game;
