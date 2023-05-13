
const getComputerChoice = () =>{
    const options = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber]
}
const result = (playerSelection,computerSelection)=>{
    console.log(computerSelection)
    if((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection =='paper')){
        playerPoints+=1
        console.log(`You Win ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === computerSelection){
        console.log("It's a Tie")
    }
    else{
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`)
        computerPoints+=1
    }
}
const game = (num)=>{
    for (let index = 1; index <= num; index++) {
        let playerSelection = (prompt('Select Your Entry : ')).toLowerCase()
        let computerSelection = getComputerChoice()
        result(playerSelection,computerSelection)
    }
    console.log
    (`
    Player Points : ${playerPoints}
    Computer Points : ${computerPoints}
    `)
    if(playerPoints > computerPoints){
        console.log(`You win`)
    }
    else if (playerPoints == computerPoints){
        console.log(`The Game is a Tie`)
    }
    else{
        console.log('You Lose')
    }
}

const noOfGames = +prompt('No of Rounds you want play : ')
let playerPoints = 0
let computerPoints = 0
game(noOfGames)
