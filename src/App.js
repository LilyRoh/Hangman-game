import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HangManImg from './components/HangManImg';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import AlertMessage from './components/AlertMessage';
import './App.css';

//set input words and get random words
const words = ['apple','banana'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

// define a function to handle keydown event
  const handleKeydown = (
    event,
    selectedWord,
    correctLetters,
    setCorrectLetters,
    wrongLetters,
    setWrongLetters,
    playable,
    setPlayable
  ) => {
    const { key, keyCode } = event;
	// check if the key pressed is a letter and the game is still playable
    if (playable && keyCode >= 65 && keyCode <= 90) {
	const letter = key.toLowerCase();
	const isCorrect = selectedWord.includes(letter);
    if (isCorrect && !correctLetters.includes(letter)) {
        setCorrectLetters((currentLetters) => [...currentLetters, letter]);
    } else if (!isCorrect && !wrongLetters.includes(letter)) {
        setWrongLetters((currentLetters) => [...currentLetters, letter]);
    }
    setPlayable(!isCorrect);
    }
  };
  // add event listener to window to listen for keydown events
  useEffect(() => {
    const handleKeyDownWrapper = (event) =>
      handleKeydown(
        event,
        selectedWord,
        correctLetters,
        setCorrectLetters,
        wrongLetters,
        setWrongLetters,
        playable,
        setPlayable
      );
    window.addEventListener('keydown', handleKeyDownWrapper);
// remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyDownWrapper);
    };
  }, []);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header></Header>
      <div className='game-container'>
        <HangManImg wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <AlertMessage
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />

      <button onClick={playAgain}>Restart game</button>
    </>
  );
}

export default App;
