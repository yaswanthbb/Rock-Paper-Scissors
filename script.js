const start = document.getElementById("start")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const gameResult = document.querySelector(".game-result") 
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const winner = document.querySelector(".winner")
let playerPoints = 0
let computerPoints = 0

const getComputerChoice = () =>{
    const options = ['rock','scissors','paper']
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber]
}

const result = (playerSelection,computerSelection)=>{
    if((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection =='paper')){
        playerPoints+=1
        gameResult.textContent = `You Win ${playerSelection} beats ${computerSelection}`
        gameResult.style.color = "green"        
    }
    else if (playerSelection === computerSelection){
        gameResult.textContent = "It's a Tie"
        gameResult.style.color = "yellow"
    }
    else{
        gameResult.textContent = `You Lose ${computerSelection} beats ${playerSelection}`
        gameResult.style.color = "red"
        computerPoints+=1
    }
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
    if(playerPoints ===5 || computerPoints === 5){
        game()
    }

}

let computerSelection = getComputerChoice()


rock.addEventListener('click',()=>{
    if(playerPoints !== 5 && computerPoints !== 5 ){
        result("rock",computerSelection)
    }
})
paper.addEventListener('click',()=>{
    if(playerPoints !== 5 && computerPoints !== 5 ){
        result("paper",computerSelection)
    }
})
scissors.addEventListener('click',()=>{
    if(playerPoints !== 5 && computerPoints !== 5 ){
        result("scissors",computerSelection)
    }
})


const game = () =>{
    if(playerPoints == 5){
        winner.textContent = "You Won The Match !!"
        winner.style.color = "green"
    }
    else{
        winner.textContent = "You Lost The Match !!"
        winner.style.color = "red"
    }
}