function getComputerChoice(){
    let computerGuess = (Math.floor(Math.random()*3));
    return computerGuess;
}

function compWeapon(){
    let compNumber = getComputerChoice();
    let computerWeapon = compNumber === 0? "Rock": compNumber === 1? "Paper" : "Scissors" ;
    return computerWeapon;
}

function getHumanChoice(){

    let input= prompt("pick a number from 0-2, 0=rock, 1=paper, 2=scissors");
    return input;
}

function humanWeapon(){
    let hw = parseInt(getHumanChoice());
    let HumWeapChoice = hw === 0 ? "Rock" : hw ===1 ? "Paper" : "Scissors";
    return HumWeapChoice;
}

function gLogic(){
    let cw = compWeapon();
    let hw = humanWeapon();
    console.log("Computer weapon choice  : "+cw);
    console.log("Human weapon choice  : "+ hw);
    let game = cw === hw ? "draw": cw ==="Scissors" && hw==="Paper" ? "computer wins": cw ==="Paper" && hw === "Rock" ? "computer wins": cw === "Rock" && hw ==="Scissors" ? "computer wins" : "Human Wins";

    console.log("this "+game);
    return game;
}

function scoreCount(){  
    let humanScore=0;
    let computerScore=0;
    let draw=0;
while(humanScore < 3 && computerScore < 3){
    let gl = gLogic();
    console.log("this is the type : "+typeof(gl)+ " and this is the content :: " + gl);
    gl === "computer wins" ? computerScore++ :  gl ==="Human Wins" ? humanScore++ : draw++;
    console.log(`humanScore = ${humanScore} || computerScore = ${computerScore} || draw = ${draw}`);
 
}

let winnerIs = humanScore ===3? "human won" : computerScore ===3? "Computer won": "Keep Going" ;
console.log("who won? the "+winnerIs);

return winnerIs;

}
console.log("alive and kicking");
sc =scoreCount();
console.log("this is the variable "+sc);
