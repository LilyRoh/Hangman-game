import React, { useEffect } from "react";
import {Check} from "../helpers/helpers";


// Define the AlertMessage component as a functional component that accepts props
const AlertMessage = ({
	correctLetters,
	wrongLetters,
	selectedWord,
	setPlayable,
	playAgain,
}) => {

	// Initialize a variable to determine if the game is playable
	let playable = true;
	// Initialize a variable to store the final message to be displayed
	let finalMessage = "";

	// Check if the game has been won or lost using the Check function
	if (Check(correctLetters, wrongLetters, selectedWord) === "win") {
		// If the game is won, set playable to false and display a winning message
		playable = false;
		finalMessage = "You saved him";

	} else if (Check(correctLetters, wrongLetters, selectedWord) === "lose") {
		// If the game is lost, display a losing message
		finalMessage = "Sorry, He is GONE";
		playable = false;
	}
// Set the playability of the game using the setPlayable function passed in as a prop
	useEffect(() => {
		setPlayable(playable);
	});

	return (
		<div
			className="popup-container"
			style={finalMessage !== "" ? { display: "flex" } : {}}
		>
			<div className="popup">
				<h2>{finalMessage}</h2>
				<button onClick={playAgain}>Play Again</button>
			</div>
		</div>
	);
};

export default AlertMessage;
