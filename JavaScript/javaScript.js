//* JavaScript for RockPaperScissors Game


const options = ['rock' , 'paper' , 'scissors'];
//array containing options for game

function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length); 
    //gets a random index value based on array contents
    const item = array[randomIndex];
    //get random item from array
    return item;
}

let computerPlayResult = computerPlay(options)
 //runs computerPlay agains options


let playerSelection = ("")
//input from player - set to be case-insensitive
let roundResult = (0)
//result will contain the result of each playRound 
let playerTally = (0)
//counts player winsGame
let computerTally = (0)
//counts computer wins
let roundWin = ("You Win! " + playerSelection + " beats "  + computerPlayResult)
//if player beats computer (roundResult === 1)
let roundLose = ("You Lose! " + computerPlayResult + " beats "  + playerSelection)
//if computer beats player (roundResult === 0)
let roundAnnounce = ("test")

//game function plays out and stores result in result variable
function playRound(player, computer){
    if (player=="rock" && computer =="paper"){
        roundResult =(0)
    } else if (player=="paper" && computer =="scissors"){
        roundResult =(0)
    } else if (player=="scissors" && computer =="rock"){
        roundResult =(0)
    } else if (player=="scissors" && computer =="paper"){
        roundResult =(1)
    } else if (player=="paper" && computer =="rock"){
        roundResult =(1)
    }else if (player=="rock" && computer =="scissors"){
        roundResult =(1)
    }else if (player === computer){
        roundResult = (2)
    }else {
        roundResult = (3)
    }
}

//Translate round result to win/lose/tie/NaN 
roundResultAnnounce(roundResult);
function roundResultAnnounce(x){
    if (roundResult == 1){
        roundAnnounce = (roundWin);
    } else if (roundResult == 0){
        roundAnnounce = (roundLose);
    } else if (roundResult == 2){
        roundAnnounce =("Its a Tie");
    } else {
        roundAnnounce =("You did not type a valid option");
    }
}

//keep count of wins for player and computer
function roundTotal(x){
    if (x == 1){
        return ++playerTally;

    } else if (x == 0){
        return ++computerTally;
    } 
}
const playResult = playRound(playerSelection, computerPlayResult)


//this plays the game rock paper scissors for 5 rounds
for (let i = 0; i <5; i++) {
    let playerSelection = prompt("Pick Rock Paper or Scissors" , "").toLowerCase()
    let computerPlayResult = computerPlay(options)
    playRound(playerSelection, computerPlayResult);
    roundTotal(roundResult)
    roundResultAnnounce(roundResult)
    console.log( "player played " + (playerSelection))
    console.log ("player tally is " + (playerTally));
    console.log( "computer played " + (computerPlayResult))
    console.log ("computer tally is " + (computerTally));
    console.log (roundAnnounce)
    console.log (roundResult)
   

}