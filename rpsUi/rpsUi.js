const gameButtons = document.querySelectorAll(".rockImage, .paperImage, .scissorsImage");
const rockBtn = document.querySelector(".rockImage");
const paperBtn = document.querySelector(".paperImage");
const scissorsBtn = document.querySelector(".scissorsImage");
const resetBtn = document.querySelector(".resetBtn");

const userChoice = document.querySelector(".player");
const computerC = document.querySelector(".comp");
const roundWinner = document.querySelector(".roundWinner");
const winner = document.querySelector(".winner");

//scoreboard
const userS = document.querySelector(".userS");
const compS = document.querySelector(".compS");



let humanChoice = "";
let numOfGames = 0;
let computerSelection = "";
let winCount = "";
let humanScore = 0;
let computerScore = 0;
let draw = 0;



function computerChoice(){
    let rn = Math.floor(Math.random()*3);
    computerSelection = rn ===0 ? "Rock" : rn ===1 ? "Paper": "Scissors";
    computerC.textContent = computerSelection;
    return computerSelection;
}

function humanSelect(){
    rockBtn.addEventListener("click", ()=>{
        humanChoice = "Rock";
        userChoice.textContent= humanChoice;
        computerChoice();
        determineWinner();
        ScoreCount();
        gamesResult();
        
        if(humanScore ===numOfGames || computerScore===numOfGames){
            return;
        }
           
    });

    paperBtn.addEventListener("click", ()=>{
        humanChoice = "Paper";
        userChoice.textContent=humanChoice;
        computerChoice();
        determineWinner();
        ScoreCount();
        gamesResult();
        
    });

    scissorsBtn.addEventListener("click", ()=>{
        humanChoice="Scissors";
        userChoice.textContent=humanChoice;
        computerChoice();
        determineWinner();
        ScoreCount();
        gamesResult();
        
    });

}

function determineWinner(){
    if(computerSelection === humanChoice){
        roundWinner.textContent ="Draw";
        winCount = "Draw";
        return "Draw" ;
    } 
    else if((computerSelection === "Rock" && humanChoice === "Scissors") ||
    (computerSelection === "Paper" && humanChoice === "Rock") ||
    (computerSelection === "Scissors" && humanChoice === "Paper")){
        roundWinner.textContent = "Computer wins";
        winCount = "Computer wins";
        return "Computer wins";
    } else {
        roundWinner.textContent = "Human Wins";
        winCount = "Human Wins";
        return "Human Wins";
    }
}

function ScoreCount(){
    if(winCount === "Draw"){
        draw++;
    } else 
    if(winCount === "Human Wins"){
        humanScore++;
    } else {
        computerScore++;
    }
    console.log(`Draws: ${draw} || Human Wins: ${humanScore} || Computer Wins : ${computerScore}`);
    userS.textContent = humanScore;
    compS.textContent = computerScore;
    
}

function gamesResult(){
    if(humanScore === numOfGames || computerScore === numOfGames){
        // disable buttons
        gameButtons.forEach(button => {
            button.disabled = true;
            button.computedStyleMap.opacity = "0.5";
        });

    }

    if(humanScore === numOfGames){
        winner.textContent =`After ${numOfGames} rounds the winner is "YOU"`;
        console.log(`Human Won ${humanScore} games while the computer only got ${computerScore}`);
        

    } else if(computerScore === numOfGames){
        winner.textContent =`After ${numOfGames} rounds the winner is the Computer`;
        console.log(`Computer Won ${computerScore} games while the human only got ${humanScore}`);
    } 
    
}
numOfGames= parseInt(prompt("First to how many games? the default is 3 if left blank") || 3); //this defaults it to 3 if left blank
winner.textContent= `First to ${numOfGames} games wins`;

    
humanSelect();

resetBtn.addEventListener("click", ()=> {
    reset();

})

function reset(){
    numOfGames= parseInt(prompt("First to how many games? the default is 3 if left blank") || 3); 
    winner.textContent= `First to ${numOfGames} games wins`;
    
    humanChoice = "";
    computerSelection = "";
    winCount = "";
    humanScore = 0;
    computerScore = 0;
    draw = 0;

    userChoice.textContent = "";
    computerC.textContent = "";
    roundWinner.textContent="";

    userS.textContent = humanScore;
    compS.textContent = computerScore;

    gameButtons.forEach(button => {
        button.disabled = false;
        button.computedStyleMap.opacity = "1";
    });

}

