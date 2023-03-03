import React from 'react'

// Define the WrongLetters component as a functional component that accepts props
const WrongLetters = ({ wrongLetters }) => {
  // Define a function to be called when the help button is clicked
  const help = (e) =>{
  alert("Guess the word and save this man!!");
}
  return (
    <div className="wrong-letters-container">
      <div>
        <button onClick={help}>help</button>
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
        }
      </div>
    </div>
  )
}

export default WrongLetters
