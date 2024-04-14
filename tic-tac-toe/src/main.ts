import './style.scss'


//accessing HTML elements
const startButton = document.querySelector<HTMLButtonElement>(".game__button--restart")
const gameText =  document.querySelector<HTMLButtonElement>(".game__text")
const buttonO = document.querySelector<HTMLButtonElement>(".game__players--button-o")
const buttonX =document.querySelector<HTMLButtonElement>(".game__players--button-x")
const scoreO = document.querySelector<HTMLButtonElement>(".game__scoreO")
const scoreX = document.querySelector<HTMLButtonElement>(".game__scoreX")
const gridButton = document.querySelectorAll<HTMLButtonElement>("#game__grid--button")
const gridOne = document.querySelector<HTMLElement>(".game__grid--one")


//throw the error
if (
  !startButton ||
  !gameText ||
  !buttonO ||
  !buttonX ||
  !scoreO ||
  !scoreX ||
  !gridButton||
  !gridOne
  
  ){
    throw new Error ("Issue with selectors");
  }



let buttonStart= "Start the game! ";
let buttonRestart="Restart the game";
let playerOne="none";
let playerTwo="none";
let isSymbolChosenO = true;
let isSymbolChosenX = true;
 buttonO.disabled = true;
buttonX.disabled = true;


//start the game 
const handleStartGameButton=(event:Event)=>{
  console.log("Start the game event",event);
  //const clickStartButton = event.target as HTMLElement;
 if (buttonStart){
  startButton.innerText=buttonRestart;
  gameText.innerText="Choose symbol";
  buttonStart=""
   isSymbolChosenO = true;
   isSymbolChosenX = true;
  buttonO.disabled = false;
   buttonX.disabled = false;
 }
 //restart the game
 else if(buttonRestart && buttonStart===""){
  buttonStart= "Start the game! ";
  startButton.innerText=buttonStart;
  gameText.innerText="";
  scoreO.innerText=""
  scoreX.innerText=""
  playerOne="";
  playerTwo="";
  isSymbolChosenO = true;
   isSymbolChosenX = true;
  buttonO.disabled = true;
   buttonX.disabled = true;
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
    console.log("player one is:",playerOne)
    console.log("player two is:" ,playerTwo)
    scoreO.innerText="0"
  scoreX.innerText="0"
  gameText.innerText=""
  isSymbolChosenO = true;
   isSymbolChosenX = false;
  buttonO.disabled = false;
   buttonX.disabled = true;



  }
  else if (clickedButton==buttonX ){
    playerOne=buttonX.innerText
    playerTwo=buttonO.innerText
    console.log("player one is:",playerOne)
    console.log("player two is:" ,playerTwo)
    scoreO.innerText="0"
  scoreX.innerText="0"
  gameText.innerText=""
  isSymbolChosenO = false;
   isSymbolChosenX = true;
  buttonO.disabled = true;
   buttonX.disabled = false;

  }
}

buttonO.addEventListener("click",handleButtons)
buttonX.addEventListener("click",handleButtons)









