import React, {Component} from 'react'


class Words extends Component {

    constructor(props) {
        super(props);
        this.state = {currentWordClass : false}

    }

    arrayToWords = (array) => {
        const wordsArray = array.map((wordObject) => {
            return (
                <li className={ wordObject.wordsel ? "list-group-item border border-warning" : "list-group-item"} onClick={() => this.props.changeWord(wordObject)}> {wordObject.word} </li>
            )
        })
        return wordsArray
    }

    render() {
        return (
        <ul  className={"list-group col-sm"}>
            {this.arrayToWords(this.props.words)}
        </ul>
    )
}


}

export default Words;