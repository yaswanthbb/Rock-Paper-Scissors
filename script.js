
const getComputerChoice = () =>{
    const options = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber]
}
const result = (playerSelection,computerSelection)=>{
    console.log(computerSelection)
    if((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection =='paper')){
        
    }
    else if (playerSelection === computerSelection){
        console.log("It's a Tie")
    }
    else{
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`)
    }
}
const game = (num)=>{
    for (let index = 1; index <= num; index++) {
        const playerSelection = (prompt('Select Your Entry : ')).toLowerCase()
        const computerSelection = getComputerChoice()
        result(playerSelection,computerSelection)
    }
}

const noOfGames = +prompt('No of Rounds you want play : ')

game(noOfGames)
