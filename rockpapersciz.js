let compSelec;
let playerChoice;
let compScore = 0;
let result;
let playerScore = 0;
let buttons = document.querySelectorAll(".button")
const container = document.querySelector("#score-container");

function getCompSelec(min, max) {
	let compChoice = 
	ranNum = Math.floor(Math.random() * (max - min)) + min;
  switch (ranNum) {
  case 0:
    compChoice = "rock";
    break;
  case 1:
    compChoice = "paper";
    break;
  case 2:
    compChoice = "scizzor";
    break;
 } 
 return compChoice
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();
    compSelec =  getCompSelec(0, 3)
    let result = singleRound(playerSelection, compSelec)
      if(result.includes("Congrats!")) {
        playerScore += 1
        playerScoreUp()
      }
      if(result.includes("Sorry!")) {
        compScore += 1
        compScoreUp()
      }
    console.log(result)
  }); 
});

function singleRound(playerChoice, compSelec){;                                 
  if(playerChoice == compSelec){
    return "It's a Tie!"
  } 
  if(compSelec == "rock"){
    switch (playerChoice){
        case "scizzor":
        return "Sorry! Rock beats scizzor, you lose.";
        break;
        case "paper":
        return "Congrats! Paper beats rock, you win";
        break;
    }
  }
 if(compSelec == "scizzor"){
    switch (playerChoice){
        case "rock":
        return "Congrats! Rock beats scizzor, you win.";
        break;
        case "paper":
        return "Sorry! Scizzor beats paper, you lose.";
        break;                                           
    }
  }
  if(compSelec == "paper"){
    switch (playerChoice){
        case "rock":
        return "Sorry! Paper beats rock, you lose.";
        break;
        case "scizzor":
        return "Congrats! Scizzor beats paper, you win";
        break;                                           
    }
  }
}

function playerScoreUp() {
  let playerScoreBox = document.querySelector("#player-score")
   playerScoreBox.textContent = playerScore;
}

function compScoreUp() {
  let compScoreBox = document.querySelector("#comp-score")
  compScoreBox.textContent = compScore
}