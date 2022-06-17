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


let playerSelection = prompt("Pick Rock Paper or Scissors" , "").toLowerCase()
//input from player - set to be case-insensitive
let roundResult = ("50")
//game function plays out and stores result in result variable
playRound(playerSelection, computerPlayResult);
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
roundWinLose(roundResult);
function roundWinLose(x){
    if (roundResult == (0)){
        console.log("You Lose! " + playerSelection + " beats "  + computerPlayResult)
    } else if (roundResult == (1)){
        console.log("You Win! " + playerSelection + " beats "  + computerPlayResult)
    } else if (roundResult == (2)){
        console.log("Its a Tie")
    } else {
        console.log("You did not pick a valid option")
    }
}


console.log(computerPlayResult)
console.log(roundResult)
