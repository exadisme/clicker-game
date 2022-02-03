// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 0;

let pointsEl = document.getElementById("pointup");

let status = document.getElementById("game-status");

let playButton = document.getElementById("button");

function add3Points() {
	myPoints += 3;
}

function remove1Point() {
	myPoints -= 1;
}

function pointUp() {
	if (myPoints == 0) {
		pointsEl.textContent = myPoints; 
		playButton.textContent = "Click Me!"; 
		status.textContent = " ";
	}
	
	if (myPoints < 12) { 
		add3Points(); 
		pointsEl.textContent = myPoints; 
	}

	if (myPoints == 12) { 
			remove1Point();
			remove1Point();
			pointsEl.textContent = myPoints;		
	}

	if (myPoints == 10) {
		status.textContent = "You made it to 10 points! YOU WIN!!!"
		playButton.textContent = "Play Again"
		console.log(myPoints);
		myPoints = 0;
		pointsEl.textContent = myPoints;
	}
}

// // Call the functions to that the line below logs out 10
