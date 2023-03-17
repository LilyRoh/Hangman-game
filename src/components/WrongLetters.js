import React from 'react'

// Define the WrongLetters component as a functional component that accepts props
const WrongLetters = ({ wrongLetters }) => {
  // Define a function to be called when the help button is clicked
  const help = (e) =>{
  alert(
    "1) The game randomly selects a word from a pre-defined list of words." +

  "\n2) You are given 6 chances to guess the word by guessing one letter at a time."+
  
  "\n3) For each incorrect guess, a part of the hangman is drawn on the screen, representing a person being hanged. The number of incorrect guesses allowed before the 'hangman' is complete and the game is lost is usually predetermined."
  
  +"\n4) If  you guesses a letter that appears in the word, all instances of that letter in the word are revealed." +
  
  "\n5) You wins the game if you correctly guess the entire word before the hangman is fully drawn."
  
  +"\n6) If you loses the game the correct word is revealed and the game is over");
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
