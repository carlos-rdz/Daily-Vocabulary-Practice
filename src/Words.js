import React, {Component} from 'react'


class Words extends Component {

    constructor(props) {
        super(props);
        this.state = {currentWordClass : false}

    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    arrayToWords = (array) => {
        // const shuffledArray = this.shuffle(array)

        const wordsArray = array.map((wordObject) => {
            return (
                <li className={ wordObject.wordsel ? "list-group-item border bg-info" : "list-group-item"} onClick={() => this.props.changeWord(wordObject)}> {wordObject.question} </li>
            )
        })
        return wordsArray
    }

    render() {
        return (
        <ul  className={"list-group col-sm"}>
            {this.arrayToWords(this.props.questions)}
        </ul>
    )
}


}

export default Words;