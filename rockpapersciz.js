let compSelec;
let playerChoice;
let compScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#content3");
const container = document.querySelector("#results-container");


function beginningAnimation() {
  fadeIn();
  //need to turn nodelist of spans into an array so we can access last value for ontransitionend
  const content1 = document.querySelector("#content1");
  let content1Span = desc1.querySelectorAll("span");

  content1Span = Array.from(content1Span);

  const content2 = document.querySelector("#content2");
  const content3 = document.querySelector("#desc3");

  content1Span[content1Span.length - 1].ontransitionend = () => {
    content1.classList.add("fade-out");

    content1.addEventListener("animationend", () => {
      content1.classList.add("disappear");
      content1.classList.remove("animate");
      content2.classList.remove("disappear");
      content2.classList.add("animate");
      fadeIn();
      /* need to collect nodelist of span 
in the same function we activate fadein()
or else nodelist will be empty */
      let content2Span = content2.querySelectorAll("span");
      content2Span = Array.from(desc2Span);

      content2Span[content2Span.length - 1].ontransitionend = () => {
        content2.classList.add("fade-out");
        content2.addEventListener("animationend", () => {
          content2.classList.add("disappear");
          content2.classList.remove("animate");
          content3.classList.remove("disappear");
          content3.classList.add("animate");
          fadeIn();

          let content3Span = content3.querySelectorAll("span");
          content3Span = Array.from(content3Span);

          content3Span[content3Span.length - 1].ontransitionend = () => {
            const cta = document.querySelector("#title1");

            cta.classList.add("drop-down");

            cta.addEventListener("animationend", () => {
              const gameCtn = document.querySelector("#game-container");

              setTimeout(function () {
                gameCtn.classList.add("fade-in");
              }, 300);
            });
          };
        });
      };
    });
  };
}

function fadeIn() {
  let text = document.querySelector(".animate");

  let strText = text.textContent;
  let splitText = strText.split("");
  text.textContent = "";
  //append span tags to each character in the string
  for (i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`;
  }
}

function hideOnScroll() {
  if (document.scrollRight > 50 || document.documentElement.scrollTop > 50) {
      document.getElementsByClassName('scroll')[0].classList.add('active');
  } else {
      document.getElementsByClassName('scroll')[0].classList.remove('active');
      titleCycle();
  }
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

// function game(playerSelection) {
//   let result
//   let counter= 0
//   playerSelec = playerSelection.toLowerCase()
//   if (playerSelec == "rock" || playerSelec == "paper" || playerSelec== "scizzor"){
//     for (let i = 0; i < 5; i++){;                         
//       let compSelection = getCompSelec(0, 3)
//       result = singleRound(playerSelec, compSelection)
//       console.log(result)
//       if(result.includes("Congrats!")){
//         playerScore+=1
//       }
//       if(result.includes("Sorry")){
//          compScore-=1
//       }                                               
//     }
//     counter>=0 ? console.log("You won the best of 5") : console.log("You lost or tied in the best of 5")
    
//   }
//   else {
//     result = "Sorry that is not a valid choice, try again"
//     console.log(result)

//   }
// }


function playerScoreUp() {
  let playerScoreBox = document.querySelector("#player-score")
  playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
   playerScoreBox.textContent = playerScore;
}

function compScoreUp() {
  let compScoreBox = document.querySelector("#comp-score")
  compScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
   compScoreBox.textContent = compScore
}