import './style.scss'


//accessing HTML elements
const startButton = document.querySelector<HTMLButtonElement>(".game__button--restart")
const gameText =  document.querySelector<HTMLButtonElement>(".game__text")
const buttonO = document.querySelector<HTMLButtonElement>(".game__players--button-o")
const buttonX =document.querySelector<HTMLButtonElement>(".game__players--button-x")

//throw the error
if (
  !startButton ||
  !gameText ||
  !buttonO ||
  !buttonX
  ){
    throw new Error ("Issue with selectors");
  }






//start the game 
////function
const handleStartGameButton=(event:Event)=>{
  console.log("Start the game event",event);
  const clickStartButton = event.target as HTMLButtonElement
  clickStartButton.innerText="Restart game"
  gameText.innerText="Choose your symbol"
  

}
////event listener
startButton.addEventListener("click", handleStartGameButton)

///choose the symbol
///function



///event listener





