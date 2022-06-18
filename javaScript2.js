//* JavaScript for RockPaperScissors Game

//array containing options for game
const options = ['rock' , 'paper' , 'scissors'];

const playerOption = ("Pick Rock Paper or Scissors.");
let playerOptionLower = playerOption;
//input from player - set to be case-insensitive



function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length); 
    //gets a random index value based on array contents
    const item = array[randomIndex];
    //get random item from array
    return item;
    
}

let computerPlayResult = computerPlay(options)
 //runs computerPlay agains options



//input from player - set to be case-insensitive
let roundResult = (0)
//result will contain the result of each playRound 
let playerTally = (0)
//counts player winsGame
let computerTally = (0)
//counts computer wins

//if player beats computer (roundResult === 1)

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



//keep count of wins for player and computer
function roundTotal(x){
    if (x == 1){
        return ++playerTally;

    } else if (x == 0){
        return ++computerTally;
    } 
}



//this plays the game rock paper scissors for 5 rounds
for (i = 0; i <=5; i++){
    //Variables//
    let computerPlayResult = computerPlay(options)
    let playerSelection = prompt (playerOptionLower).toLowerCase()
    let roundLose = ("You Lose! " + computerPlayResult + " beats "  + playerSelection)
    let roundWin = ("You Win! " + playerSelection + " beats "  + computerPlayResult)
    let roundAnnounce = ("test")
    let x = playerTally
    let i = computerTally
   
    //play one round
    playRound(playerSelection, computerPlayResult);
   
    //run round result function
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

    roundTotal(roundResult)
    roundResultAnnounce(roundResult)

    //report last round results
    console.log( "player played " + (playerSelection))
    console.log ("player tally is " + (playerTally));
    console.log( "computer played " + (computerPlayResult))
    console.log ("computer tally is " + (computerTally));
    console.log (roundAnnounce)

    //Highest score wins
    if (playerTally > computerTally) {
        console.log (" You Win");
    }else if (playerTally <  computerTally) {
        console.log ("You Lose");
    } else {
        console.log ("Its a tie I guess")
    }
   

}