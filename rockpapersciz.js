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

function game(playerSelection) {
  let result
  let counter= 0
  playerSelection = prompt()
  playerSelec = playerSelection.toLowerCase()
  if (playerSelec == "rock" || playerSelec == "paper" || playerSelec== "scizzor"){
    for (let i = 0; i < 5; i++){;                         
      let compSelection = getCompSelec(0, 3)
      result = singleRound(playerSelec, compSelection)
      console.log(result)
      if(result.includes("Congrats!")){
        counter+=1
      }
      if(result.includes("Sorry")){
         counter-=1
      }                                               
    }
    counter>=0 ? console.log("You won the best of 5") : console.log("You lost or tied in the best of 5")
    
  }
  else {
    result = "Sorry that is not a valid choice, try again"
    console.log(result)

  }
}


game()