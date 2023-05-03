window.onload = startAnimate()
let compSelec;
let playerChoice;
let compScore = 0;
let result;
let playerScore = 0;
let buttons = document.querySelectorAll(".button")
const container = document.querySelector("#score-container");

function startAnimate(){
  fadeIn()
  const title1 = document.querySelector("#title1");
  const title2 = document.querySelector("#title2");
  const content1 = document.querySelector("#content1")
  const content2 = document.querySelector("#content2")
  const content3 = document.querySelector("#content3")
  const content4 = document.querySelector("#content4")
  let title1Span = title1.querySelectorAll("span");
  title1Span = Array.from(title1Span)
    title1Span[title1Span.length - 1].ontransitionend = () =>{
      title1.classList.add("fade-out");
      title1.addEventListener("animationend", () => {
        title1.classList.add("disappear");
        title1.classList.remove("animate");
        title2.classList.remove("disappear");
        title2.classList.add("animate");
        fadeIn();
     
        let title2Span = title2.querySelectorAll("span");
        title2Span = Array.from(title2Span);
          title2Span[title2Span.length - 1].ontransitionend = () =>{
          title2.classList.add("fade-out");
            title2.addEventListener("animationend", () => {
              title2.classList.add("disappear");
              title2.classList.remove("animate");
              content1.classList.add("animate")
              content1.classList.remove("disappear")
              fadeIn()

              let content1Span = content1.querySelectorAll("span");
              content1Span = Array.from(content1Span);
                content1Span[content1Span.length - 1].ontransitionend = () =>{
                content1.classList.add("fade-out");
                  content1.addEventListener("animationend", () => {
                    content1.classList.add("disappear");
                    content1.classList.remove("animate");
                    content2.classList.add("animate")
                    content2.classList.remove("disappear")
                    fadeIn()
                
                  let content2Span = content2.querySelectorAll("span");
                  content2Span = Array.from(content2Span);
                    content2Span[content2Span.length - 1].ontransitionend = () =>{
                    content2.classList.add("fade-out");
                      content2.addEventListener("animationend", () => {
                        content2.classList.add("disappear");
                        content2.classList.remove("animate");
                        content3.classList.add("animate")
                        content3.classList.remove("disappear")
                        fadeIn()

                        let content3Span = content3.querySelectorAll("span");
                        content3Span = Array.from(content3Span);
                        content3Span[content3Span.length - 1].ontransitionend = () =>{
                          content3.classList.add("fade-out");
                          content3.addEventListener("animationend", () => {
                            content3.classList.add("disappear");
                            content3.classList.remove("animate");
                            content4.classList.add("animate")
                            content4.classList.remove("disappear")
                            fadeIn()
                          })
                      }
                    })
                  }
                })
           }
        })
       }
    })
  }
}

function fadeIn() {
   let titleFade = document.querySelector(".animate");
   let text = titleFade.textContent;
   let splitText = text.split("");
   titleFade.textContent = "";
   for (i = 0; i < splitText.length; i++){
    titleFade.innerHTML += `<span>${splitText[i]}</span>`;
   }

  let str = 0
  let timer = setInterval(onTick, 50);
  function onTick() {
    const span = titleFade.querySelectorAll("span")[str];
    span.classList.add("fade");
    str++;
    if(str === splitText.length){;
      endFade()
      return;
    }
  }
  function endFade(){;
    clearInterval(timer);
    timer = null;
  }
}

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
        displayResultWin()
        
      }
      if(result.includes("Sorry!")) {
        compScore += 1
        compScoreUp()
        displayResultLoss()
      }
    console.log(result)
  }); 
});

function singleRound(playerChoice, compSelec){;                                 
  if(playerChoice == compSelec){
    displayTie()
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

function displayResultWin() {
  let result = document.querySelector("#win-result")
  result.classList.remove("disappear")
  result.classList.add("fade-out")
  result.addEventListener("animationend", () => {
    result.classList.remove("fade-out")
    result.classList.add("disappear")
  })
}

function displayTie(){
  let result = document.querySelector("#tie-result")
  result.classList.remove("disappear")
  result.classList.add("fade-out")
  result.addEventListener("animationend", () => {
    result.classList.remove("fade-out")
    result.classList.add("disappear")
  })
}
function displayResultLoss(){
  let result = document.querySelector("#loss-result")
  result.classList.remove("disappear")
  result.classList.add("fade-out")
  result.addEventListener("animationend", () => {
    result.classList.remove("fade-out")
    result.classList.add("disappear")
  })
}