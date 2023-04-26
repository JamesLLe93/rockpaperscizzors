function getRndInteger(min, max) {
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