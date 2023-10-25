// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards




let cards = [] // array which is a ordered list of items 

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

//let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")


let player = {    // We have clubbed the two variables into one object player .
    name : "Per", // We can access this by giving the syntax as player.name
    chips : 145 // We can access this by giving the syntax as player.chips
}

//let playerName = "per"
//let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10)
    {
        return 10
    }
    else if(randomNumber === 1)
    {
        return 11
    }
    else
    {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards :" 

    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum :" + sum
    if(sum<=20)
{
    message="Do you want to draw a new card"
}
else if(sum === 21)
{
    message="Wohoo! you've won the black jack"
}
else if(sum > 21)
{
    message = "Sorry you are out of the game "
}

  messageEl.textContent = message
}

function newCard() {
    //console.log("Drawing a new card from the deck :")

    // only allow the player to get a new card if she isAlive() is true and does not have black jack.


    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        sum += card

        cards.push(card)

         renderGame()

    }

    


}

