import './style.scss'


//accessing HTML elements
const startButton = document.querySelector<HTMLButtonElement>(".game__button--restart")
const gameText =  document.querySelector<HTMLButtonElement>(".game__text")
const buttonO = document.querySelector<HTMLButtonElement>(".game__players--button-o")
const buttonX =document.querySelector<HTMLButtonElement>(".game__players--button-x")
const scoreO = document.querySelector<HTMLButtonElement>(".game__scoreO")
const scoreX = document.querySelector<HTMLButtonElement>(".game__scoreX")
const gridButton = document.querySelectorAll<HTMLButtonElement>("#game__grid--button")
//const gridOne = document.querySelector<HTMLElement>(".game__grid--one")


//throw the error
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



let buttonStart= "Start the game! ";
let buttonRestart="Restart the game";
let currentPlayer="";
let playerOne="";
let playerTwo="";
let scoreButtonO:number
let scoreButtonX:number
 buttonO.disabled = true;
buttonX.disabled = true;

//let gameGrid : String[] = [];
gridButton.forEach(button => {
    button.disabled = true
})


//start the game 
export const handleStartGameButton=(event:Event)=>{
  console.log("Start the game event",event);
  //const clickStartButton = event.target as HTMLElement;
 if (buttonStart){
  startButton.innerText=buttonRestart;
  gameText.innerText="Choose symbol";
  buttonStart=""
  buttonO.disabled = false;
   buttonX.disabled = false;
 }
 //restart the game
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
 (startButton.addEventListener("click", handleStartGameButton))
  





//handle chose button and playerOne/playerTwo
const handleButtons=(event :Event) =>{
  console.log("the buttons were clicked", event)
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
})
  }
}

buttonO.addEventListener("click",handleButtons)
buttonX.addEventListener("click",handleButtons)





//function to play the game
const handleGridButtons= (event:Event)=>{
  const clickedGridButton =event.target  as HTMLButtonElement
  console.log("the gird button with class", clickedGridButton.classList +" "+ "was clicked")
 
  
if(!clickedGridButton.innerText ){
  console.log("current player is:",currentPlayer)
clickedGridButton.innerText=currentPlayer


 if (checkWinner(currentPlayer)) {
gameText.innerText = `${currentPlayer} wins!`
 if (currentPlayer=="X") {
scoreButtonX++
scoreX.innerText=String(scoreButtonX)
 } else  {
scoreButtonO++
scoreO.innerText=String(scoreButtonO);
 }

gridButton.forEach((button)=>{
button.innerText="";
  });

 }
if (currentPlayer === playerOne) {
  currentPlayer = playerTwo; 
} else {
  currentPlayer = playerOne; 
}

}else{
  console.log("This button is already filled");
}
}

gridButton.forEach((button)=>{
 button.addEventListener("click", handleGridButtons)
})




//winning combos

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

const checkWinner = (player: string): boolean => {
 for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];

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





