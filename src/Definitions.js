import React from 'react'



const Definitions = (props) => {



    const arrayToWords = (array) => {

        const wordsArray = array.map((wordObject) => {
            return (
                <li className={ wordObject.defsel ? "list-group-item border bg-info" : "list-group-item"} onClick={() => props.changeDef(wordObject)}> {wordObject.def} </li>
            )
        })
        return wordsArray
    }

    return (
        <ul className="col-sm list-group">
            {arrayToWords(props.questions)}
        </ul>
    )
    
}

export default Definitions;