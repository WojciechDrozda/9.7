var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function(){ playerPick('rock') });
pickPaper.addEventListener('click', function(){ playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

var newGameElem = document.getElementById('js-newGameElement'),
	pickElem =  document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'Play Again!';
			computerPickElem.innerHTML = 'Computer selection';
			computerResultElem.innerHTML = 'Computer Score';
			playerResultElem.innerHTML = 'Player Score';
			playerPickElem.innerHTML = 'Player selection';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}
setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
	player.name = prompt('Please enter your name', 'Player Name');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

function getComputerPick() {
	var possiblePick = ['rock', 'paper', 'scissors'];
	return possiblePick[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
	var computerPick = getComputerPick();
	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
	checkRoundWinner(playerPick, computerPick);
	setGamePoints();
	setWinner();
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
	var winnerIs = '';
	if(playerPick == computerPick) {
		winnerIs = 'draw';
	} else if (
		(playerPick == 'rock' && computerPick == 'scissors') ||
		(playerPick == 'scissors' && computerPick == 'paper') ||
		(playerPick == 'paper' && computerPick == 'rock')) {

		winnerIs = 'player';
	}else {winnerIs = 'computer';}
	if(winnerIs == 'player') {
		playerResultElem.innerHTML = 'Win round';
		player.score++;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = 'Win round';
		computer.score++;
		console.log(computer.score);
	} else if (winnerIs == 'draw') {
    	computerResultElem.innerHTML = playerResultElem.innerHTML = 'Draw';
    }
}
function setWinner () {
	if (player.score == 5) {
		alert('Winner is ' + player.name);
		gameState = 'ended';
		setGameElements();
	}else if (computer.score == 5) {
		alert('Winner is computer');
		gameState = 'ended';
		setGameElements();
	}
}
