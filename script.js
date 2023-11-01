let playerWin=0,computerWin=0
const outcome=document.getElementById('outcome')
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
        {
            outcome.innerHTML='It is a draw!'
            return "draw"
        }
        else if(computerChoice=="paper")
        {
            outcome.innerHTML='You Lose!'
            return "lose"
        }
        else
        {
            outcome.innerHTML='You Win!'
            return "win"
        }
    }
    else if(playerChoice=="paper")
    {
        if(computerChoice=="paper")
        {
            outcome.innerHTML='It is a draw!'
            return "draw"
        }   
        else if(computerChoice=="scissors")
        {
            outcome.innerHTML='You Lose!'
            return "lose"
        }
        else
        {
            outcome.innerHTML='You Win!'
            return "win"
        }

    }
    else if(playerChoice=="scissors"){
        if(computerChoice=="scissors")
        {
            outcome.innerHTML='It is a draw!'
            return "draw"
        }
        else if(computerChoice=="rock")
        {
            outcome.innerHTML='You Lose!'
            return "lose"
        }
        else
        {
            outcome.innerHTML='You Win!'
            return "win"
        }

    }
    else
    {
        return "wrong input"
    }
}
function game(prompt)
{
    let playerChoice=prompt
    let computerChoice
    let winner
    computerChoice=getComputersChoice()
    winner=playGame(playerChoice,computerChoice)
    
    if(winner=="win")
    {
        playerWin++
    }
    else if(winner=="lose")
    {
        computerWin++
    }
    document.getElementById("userwin").innerHTML =playerWin;
    document.getElementById("computerwin").innerHTML =computerWin;
    if(playerWin==5)
    {
        outcome.innerHTML='You win. Press on one of the options to reset.'
    }
    else if(computerWin==5)
    {
        outcome.innerHTML='You win. Press on one of the options to reset.'
    }
    
}

const rockBtn=document.querySelector('#Rock')
const paperBtn=document.querySelector('#Paper')
const scissorsBtn=document.querySelector('#Scissors')


rockBtn.addEventListener('click', () => {
    if(playerWin<5 && computerWin<5)
        game(rockBtn.textContent)
    else
    {
        playerWin=0
        computerWin=0
        outcome.innerHTML='Reset! You can go again!'

    }
})
paperBtn.addEventListener('click', () => {
    if(playerWin<5 && computerWin<5)
        game(paperBtn.textContent)
    else
    {
        playerWin=0
        computerWin=0
        outcome.innerHTML='Reset! You can go again!'
    }
})
scissorsBtn.addEventListener('click',() => {
    if(playerWin<5 && computerWin<5)
        game(scissorsBtn.textContent)
    else
    {
        playerWin=0
        computerWin=0
        outcome.innerHTML='Reset! You can go again!'
    }
})
