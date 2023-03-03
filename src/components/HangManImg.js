import React from 'react'
import img1 from '../hangman-img/state1.GIF'
import img2 from'../hangman-img/state2.GIF'
import img3 from'../hangman-img/state3.GIF'
import img4 from'../hangman-img/state4.GIF'
import img5 from'../hangman-img/state5.GIF'
import img6 from'../hangman-img/state6.GIF'
import img7 from'../hangman-img/state7.GIF'
import img8 from'../hangman-img/state8.GIF'
import img9 from'../hangman-img/state9.GIF'
import img10 from'../hangman-img/state10.gif'
import img11 from'../hangman-img/state11.GIF'
import '../hangman-img/hangman.css'


//display hangman img when error ouccur
const HangManImg = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <div>
    <img src={img1}></img>
    <img src={img2}></img>
    <img src={img2}></img>
    <img src={img3}></img>
    <img src={img4}></img>
    <img src={img5}></img>

    {errors > 1 && <img src={img6}></img>}
    {errors > 2 && <img src={img7}></img>}
    {errors > 3 && <img src={img8}></img>}
    {errors > 4 && <img src={img9}></img>}
    {errors > 5 && <img src={img10}></img>}
    {errors > 6 && <img src={img11}></img>}

    </div>
  
  )
}

export default HangManImg
