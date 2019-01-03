import React, {Component} from 'react';
import Words from './Words';
import Definitions from './Definitions';
require('dotenv').config()

class Game extends Component {

componentDidMount() {
    
    fetch('https://opentdb.com/api.php?amount=10')
        .then(r => r.json())
        .then((quiz) => {
            console.log(quiz.results.forEach((questions) => (console.log(questions.question
                ))))
        })

}

constructor(props) {
    super(props);
    this.state = {
        attempts : 0,
        currentword : "",
        currentdef : " ",
        questions : [
        {   id : 1,
            question : 'create', 
            def : "bring (something) into existence.",
            wordsel : false,
            defsel : false
        },
        {   id : 2,
            question : 'engage', 
            def : "consume all of one's attention or time",
            wordsel : false,
            defsel : false
        },
        {   id : 3,
            question : 'preserve', 
            def : "maintain (something) in its original or existing state.",
            wordsel : false,
            defsel : false
        },
        {   id : 4,
            question : 'react', 
            def : "respond or behave in a particular way in response to something",
            wordsel : false,
            defsel : false
        },
        {   id : 5,
            question : 'practice', 
            def : "a customary way of operation or behavior",
            wordsel : false,
            defsel : false
        },
        {   id : 6,
            question : 'issue', 
            def : "some situation or event that is thought about",
            wordsel : false,
            defsel : false
        },
        {   id : 7,
            question : 'approach', 
            def : "move towards",
            wordsel : false,
            defsel : false
        },
        {   id : 8,
            question : 'establish', 
            def : "set up or found",
            wordsel : false,
            defsel : false
        },
        {   id : 9,
            question : 'utter', 
            def : "without qualification",
            wordsel : false,
            defsel : false
        },
        {   id : 10,
            question : 'conduct', 
            def : "direct the course of; manage or control",
            wordsel : false,
            defsel : false
        }
        ]
    
    }
        
}


render() {
    
       
    

    return (
        <div>
        <h1 className="text-white"> Match the word with the definition </h1>
            <h1 className="text-white"> Attempts : {this.state.attempts}</h1>
        <div className="container">
            <div className="row">
                <Words
                questions = {this.state.questions}
                changeWord = {this._handleWordCLick}
                />
                <Definitions
                questions = {this.state.questions}
                changeDef = {this._handleDefCLick}
            />
            </div>
            </div>
        </div>
    )
}


shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

_handleWordCLick = (wordObject) =>  {

    const newWords = this.state.questions.map((wordObj) => {
        if (wordObj.id === wordObject.id) {
            return {
                ...wordObj, wordsel : !wordObj.wordsel
    
            }
        } else {
            return {
                ...wordObj, wordsel : false
            }
        }
    })
    this.setState({
        // attempts : this.state.attempts + 1,
        questions : newWords,
        currentword : wordObject
    },this._checkMatch)
}
_handleDefCLick = (wordObject) =>  {    
    const newWords = this.state.questions.map((wordObj) => {
        if (wordObj.id === wordObject.id) {
            return {
                ...wordObj,  defsel : !wordObj.defsel
    
            }
        } else {
            return {
                ...wordObj, defsel : false
            }
        }
    })

    this.setState({
        attempts : this.state.attempts + 1,
        questions : newWords,
        currentdef : wordObject
    },
        this._checkMatch
        )
}

_checkMatch = () => {

    if (this.state.currentword.id === this.state.currentdef.id) {
        const filteredWords = this.state.questions.filter((wordObj) => {
            if (wordObj.id === this.state.currentdef.id) {
                return false
            }  else {
                return true
            }
        })
        this.setState({questions : filteredWords})
    }
}

}


export default Game;
