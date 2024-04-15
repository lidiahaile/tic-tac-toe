import './style.scss'
import confetti from "canvas-confetti"


//1.accessing HTML elements
const startButton = document.querySelector<HTMLButtonElement>(".game__button--restart")
const gameText =  document.querySelector<HTMLButtonElement>(".game__text")
const buttonO = document.querySelector<HTMLButtonElement>(".game__players--button-o")
const buttonX =document.querySelector<HTMLButtonElement>(".game__players--button-x")
const scoreO = document.querySelector<HTMLButtonElement>(".game__scoreO")
const scoreX = document.querySelector<HTMLButtonElement>(".game__scoreX")
const gridButton = document.querySelectorAll<HTMLButtonElement>("#game__grid--button")



//2.throw the error
if (
  !startButton ||
  !gameText ||
  !buttonO ||
  !buttonX ||
  !scoreO ||
  !scoreX ||
  !gridButton
 
  ){
    throw new Error ("Issue with selectors");
  }


//3.variables
let buttonStart= "Start the game! ";
let buttonRestart="Reset";
let currentPlayer="";
let playerOne="";
let playerTwo="";
let scoreButtonO:number
let scoreButtonX:number


//3.1.disable buttons
gridButton.forEach(button => {
 button.disabled = true
})
buttonO.disabled = true;
buttonX.disabled = true;



//4.start the game and choose symbol
const handleStartGameButton=(event:Event)=>{
  console.log("Start the game event",event);
//4.1.const clickStartButton = event.target as HTMLElement;
 if (buttonStart){
  startButton.innerText=buttonRestart;
  gameText.innerText="Choose symbol";
  buttonStart=""
  buttonO.disabled = false;
   buttonX.disabled = false;
 }
 //4.2.restart the game and set scores to 0
 else if(buttonRestart && buttonStart===""){
  buttonStart= "Start the game! ";
  startButton.innerText=buttonStart;
  gameText.innerText="";
  playerOne="";
  playerTwo="";
  buttonO.disabled = true;
   buttonX.disabled = true;
   gridButton.forEach((button)=>{
    button.innerText="";
     button.disabled = true;
   })
  scoreButtonO=0
  scoreButtonX=0
   scoreO.innerText=""
   scoreX.innerText=""
 }
  
}
//4.3 EventListener for starting/resetting the game
 (startButton.addEventListener("click", handleStartGameButton))
  





//5.handle chosen button and playerOne/playerTwo
const handleButtons=(event :Event) =>{
  console.log("the buttons were clicked", event)
//5.1 if button O is clicked
const clickedButton = event.target
  if (clickedButton==buttonO ){
   playerOne=buttonO.innerText
   playerTwo=buttonX.innerText
   currentPlayer=playerOne;
    console.log("player one is:",playerOne)
    console.log("player two is:" ,playerTwo)
   scoreButtonO=0
   scoreButtonX=0
    scoreO.innerText=String(scoreButtonO)
  scoreX.innerText=String(scoreButtonX)
  gameText.innerText=""
  buttonO.disabled = false;
   buttonX.disabled = true;
gridButton.forEach(button => {
    button.disabled = false
})

  }
  //5.2 if button X is clicked
  else if (clickedButton==buttonX ){
    playerOne=buttonX.innerText
    playerTwo=buttonO.innerText
    console.log("player one is:",playerOne)
    console.log("player two is:" ,playerTwo)
   gameText.innerText=""
   currentPlayer=playerOne;
   buttonO.disabled = true;
   buttonX.disabled = false;
   scoreButtonO=0
    scoreButtonX=0
    scoreO.innerText=String(scoreButtonO);
    scoreX.innerText=String(scoreButtonX);
    gridButton.forEach(button => {
    button.disabled = false
    });
  }
}
//5.3 EventListers for choosing button X/O
buttonO.addEventListener("click",handleButtons)
buttonX.addEventListener("click",handleButtons)





//6.function to play the game and check the winner
const handleGridButtons= (event:Event)=>{
  const clickedGridButton =event.target  as HTMLButtonElement
  console.log("the gird button with class", clickedGridButton.classList +" "+ "was clicked")
 
//6.2 check if the grid's button clicked is empty
if(!clickedGridButton.innerText ){
  console.log("current player is:",currentPlayer)
clickedGridButton.innerText=currentPlayer

//6.3 check if there is a winner =>update score and empty grid
 if (checkWinner(currentPlayer)) {
gameText.innerText = `${currentPlayer} wins!`;
  confetti();
 if (currentPlayer=="X") {
scoreButtonX++
scoreX.innerText=String(scoreButtonX)
 } else  {
scoreButtonO++
scoreO.innerText=String(scoreButtonO);
 }

gridButton.forEach((button)=>{
button.innerText="";
})
}

//6.4 switch player for the next turn
if (currentPlayer === playerOne) {
  currentPlayer = playerTwo; 
} else {
  currentPlayer = playerOne; 
}
 
 
//6.5 if the button has already been clicked, the player cannot input
}else {
  console.log("This button is already filled");
}

}
//6.6 EventListener for clicking grid's buttons 
gridButton.forEach((button)=>{
 button.addEventListener("click", handleGridButtons)
})


//7.winning combos
const winningCombinations: number[][] = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], //1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6]  //Top-right to bottom-right diagonal
];

//7.1.function to find any winning combos
const checkWinner = (player: string): boolean => {
  //7.2 checks combinations in the grid
 for (let i = 0; i < winningCombinations.length; i++) {
  const combination = winningCombinations[i];

//checks if a combo has the same symbol (player) on each index of the array
let isWinner = true;
for (let j = 0; j < combination.length; j++) {
const index = combination[j];
if (gridButton[index].innerText !== player) {
  isWinner = false;
  break; 
  }
}
if (isWinner) {
  return true; 
  }
}
  return false; 
};







