import React from 'react';

// Define the Word component as a functional component that accepts props
const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
       {/* Map over each letter in the selected word and render a span for each */}
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {/* If the correct letters include the letter, render the letter, otherwise render an empty string */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word
