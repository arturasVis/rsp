function getComputersChoice()
{
    let choices=["rock","paper","scissors"]
    let choice=Math.floor((Math.random()*3))
    return choices[choice]
}
function playGame(playerChoice,computerChoice)
{
    playerChoice=playerChoice.toLowerCase()
    computerChoice=computerChoice.toLowerCase()
    if(playerChoice=="rock")
    {
        if(computerChoice=="rock")
            return "draw"
        else if(computerChoice=="paper")
            return "lose"
        else
            return "win"
    }
    else if(playerChoice=="paper")
    {
        if(computerChoice=="paper")
            return "draw"
        else if(computerChoice=="scissors")
            return "lose"
        else
            return "win"
    }
    else if(playerChoice=="scissors"){
        if(computerChoice=="scissors")
            return "draw"
        else if(computerChoice=="rock")
            return "lose"
        else
            return "win"
    }
    else
    {
        return "wrong input"
    }
}
function game()
{
    let playerWin=0,computerWin=0
    let playerChoice
    let computerChoice
    let outcome
    for(let i=0;i<5;i++)
    {
        playerChoice=prompt("Please enter your option: Rock Paper or Scissors")
        computerChoice=getComputersChoice()
        outcome=playGame(playerChoice,computerChoice)
        if(outcome=="win")
        {
            playerWin++
        }
        else if(outcome=="lose")
        {
            computerChoice++
        }
        document.getElementById("userwin").innerHTML =playerWin;
        document.getElementById("computerwin").innerHTML =computerWin;
    }
    if(computerWin>playerWin)
        document.getElementById("outcome").innerHTML ="You lose";
    else if(computerWin<playerWin)
        document.getElementById("outcome").innerHTML ="You win";
    else {
        document.getElementById("outcome").innerHTML ="It was a draw";
    }
    
}

game()
