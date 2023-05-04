	/*----- constants -----*/
const slotItemSources = ['assets/burger.jpeg', 'assets/fries.jpeg', 'assets/ketchup.jpeg']

	/*----- state variables -----*/
win = false
wallet = 100
wager = 10

	/*----- cached elements  -----*/
const slot1Image = document.getElementById('slot1Image')
const slot2Image = document.getElementById('slot2Image')
const slot3Image = document.getElementById('slot3Image')
const spinButton = document.getElementById('spinButton')
const alertMessage = document.getElementById('alertMessage')
const minusOneButton = document.getElementById('minusOneButton')
const minusFiveButton = document.getElementById('minusFiveButton')
const plusOneButton = document.getElementById('plusOneButton')
const plusFiveButton = document.getElementById('plusFiveButton')
const wagerAmount = document.getElementById('wagerAmount')
const walletAmount = document.getElementById('walletAmount')



	/*----- event listeners -----*/
spinButton.addEventListener('click', spin)
minusOneButton.addEventListener('click', function(){changeWager(-1)})
minusFiveButton.addEventListener('click', function(){changeWager(-5)})
plusOneButton.addEventListener('click', function(){changeWager(1)})
plusFiveButton.addEventListener('click', function() {changeWager(5)})
window.addEventListener('load', init);


	/*----- functions -----*/
function init(){
    wallet = 100
    walletAmount.innerHTML = wallet
    wager = 10
    wagerAmount.innerHTML = wager
}

function spin(){
    if((wallet - wager) >= 0){
        wallet = wallet - wager
        walletAmount.innerHTML = wallet
        alertMessage.innerText = "Spinning..."
        slot1Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot2Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot3Image.src = slotItemSources[Math.floor(Math.random() * 3)]
    } else {
        alert("Not enough money!")
    }
    checkForWin()
}

function checkForWin(){
    if(slot1Image.src === slot2Image.src && slot2Image.src === slot3Image.src){
        win = true
        payoutWinnings()
    } else {
        win = false
    }

}


function payoutWinnings(){
    if(slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/ketchup.jpeg"){
        wallet = wallet + (wager * 2)
        walletAmount.innerText = wallet
        alertMessage.innerHTML = `<h2>YOU WIN $${wager * 2}</h2>`
    } else if (slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/fries.jpeg"){
        wallet = wallet + (wager * 3)
        walletAmount.innerText = wallet
        alertMessage.innerHTML = `<h2>YOU WIN $${wager * 3}</h2>`
    } else if (slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/burger.jpeg"){
        wallet = wallet + (wager * 4)
        walletAmount.innerText = wallet
        alertMessage.innerHTML = `<h2>YOU WIN $${wager * 4}</h2>`
    } else {
        alert("YOU WIN BUT WE ENCOUNTERED AN ERROR")
    }

}

function changeWager(amountOfChange){
    if((wager + amountOfChange) >= 1){
    wager = wager + amountOfChange
    wagerAmount.innerText = wager
} else {
    alert('Wager cannot be less than $1')
}
}