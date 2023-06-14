const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const gameResult = document.querySelector(".game-result") 


const getComputerChoice = () =>{
    const options = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber]
}

let computerSelection = getComputerChoice()

rock.addEventListener('click',()=>result("rock",computerSelection))
paper.addEventListener('click',()=>result("paper",computerSelection))
scissors.addEventListener('click',()=>result("scissors",computerSelection))

const result = (playerSelection,computerSelection)=>{
    console.log(playerSelection)
    console.log(computerSelection)
    if((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection =='paper')){
        // playerPoints+=1
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
        // computerPoints+=1
    }
}
// const game = (num)=>{
//     for (let index = 1; index <= num; index++) {
//         let playerSelection = (prompt('Select Your Entry : ')).toLowerCase()
//         let computerSelection = getComputerChoice()
//         result(playerSelection,computerSelection)
//     }
//     console.log
//     (`
//     Player Points : ${playerPoints}
//     Computer Points : ${computerPoints}
//     `)
//     if(playerPoints > computerPoints){
//         console.log(`You win`)
//     }
//     else if (playerPoints == computerPoints){
//         console.log(`The Game is a Tie`)
//     }
//     else{
//         console.log('You Lose')
//     }
// }


// let playerPoints = 0
// let computerPoints = 0
// game(noOfGames)