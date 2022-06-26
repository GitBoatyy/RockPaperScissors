//* JavaScript for RockPaperScissors Game

const options = ['rock' , 'paper' , 'scissors'];
const content = document.querySelector("#content");
const result = document.createElement('div');
const buttons = document.querySelectorAll('button');
const resetBtn = document.querySelector('reset')
const counterPlay = document.querySelector("#counterPlay");
const counterComp = document.querySelector("#counterComp");
const roundPlay = document.querySelector("#roundPlay")

let computerPlayResult = computerPlay(options)
let roundResult = (0)
let playerTally = (0)
let computerTally = (0)
let roundAnnounce = ("test")
let wrapper = document.getElementById("reset");
let b = document.createElement('button');

function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length); 
    const item = array[randomIndex];
    return item;
    
}


//game function plays out counts score
function playRound(player, computer){
    if (player=="rock" && computer =="paper"){
        roundResult = (0);
        return ++computerTally
    } else if (player=="paper" && computer =="scissors"){
        roundResult = (0);
        return ++computerTally;
    } else if (player=="scissors" && computer =="rock"){
        roundResult = (0);
        return ++computerTally;
    } else if (player=="scissors" && computer =="paper"){
        roundResult = (1);
        return ++playerTally;
    } else if (player=="paper" && computer =="rock"){
        roundResult = (1);
        return ++playerTally;
    }else if (player=="rock" && computer =="scissors"){
        roundResult = (1);
        return ++playerTally;
    }else if (player === computer){
        roundResult = (2)
    }else {
        roundResult = (3)
    }
}

//ends game if player or computer score is 5
function checkScore( x , y) {
     if ( x == 5){
        result.classList.add("result");
        result.textContent = "You Won!";
        content.appendChild(result)

    } else if ( y == 5) {
        result.classList.add("result");
        result.textContent = "You Lose!";
        content.appendChild(result)
    } else {}
}
//game end reset scores and results
function restartGame() {
    playerTally = 0
    computerTally = 0
    wrapper.removeChild(b);
    content.removeChild(result)
    counterPlay.textContent = "Player: 0 " ;
    counterComp.textContent = "Computer: 0" ;
    roundPlay.textContent = "";

}

function playAgain(x , y) {
    if ( x == 5 || y == 5){
        b.setAttribute('content', 'test content');
        b.setAttribute('class', 'btn');  
        b.textContent = 'Play Again?';
        wrapper.appendChild(b);
        b.addEventListener('click' , restartGame)
        
    }   
}


function playAGame() {  
    if (playerTally < 5 && computerTally < 5){     
        buttons.forEach((button) => {
            button.addEventListener('click' , (e) =>{
                let playerSelection = (button.id);
                //this plays the game rock paper scissors for 5 rounds
        if (playerTally < 5 && computerTally < 5){
            //Variables//
            let computerPlayResult = computerPlay(options)
            let roundLose = ("You Lose! " + computerPlayResult + " beats "  + playerSelection)
            let roundWin = ("You Win! " + playerSelection + " beats "  + computerPlayResult)
            let roundAnnounce = ("test")
        
           
            //play one round
            playRound(playerSelection, computerPlayResult);
            checkScore(playerTally , computerTally) 
            playAgain(playerTally, computerTally)
            roundResultAnnounce(roundResult);
        function roundResultAnnounce(x){
            if (roundResult == 1){
                roundAnnounce = (roundWin);
                roundPlay.textContent = (roundWin);
            } else if (roundResult == 0){
                roundAnnounce = (roundLose);
                roundPlay.textContent = (roundLose);
            } else if (roundResult == 2){
                roundAnnounce =("Its a Tie");
                roundPlay.textContent = (" It's a Tie");
            } else {
                roundAnnounce =("You did not type a valid option");
            }
        }
            roundResultAnnounce(roundResult)
        
            //report last round results
            counterPlay.textContent = "Player: " + (playerTally);
            counterComp.textContent = "Computer: " + (computerTally);
            console.log( "player played " + (playerSelection))
            console.log ("player tally is " + (playerTally));
            console.log( "computer played " + (computerPlayResult))
            console.log ("computer tally is " + (computerTally));
            console.log (roundAnnounce)
        
        
        } else if ( playerTally == 5){
            result.classList.add("result");
            result.textContent = "You Won!";
            content.appendChild(result)

        } else if ( computerTally == 5) {
            result.classList.add("result");
            result.textContent = "You Lose!";
            content.appendChild(result)
        } else {   }
            })
        
        })
    } 
        
    }

playAGame()