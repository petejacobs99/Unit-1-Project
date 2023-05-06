	/*----- constants -----*/
const slotItemSources = ['assets/burger.jpeg', 'assets/fries.jpeg', 'assets/ketchup.jpeg']

	/*----- state variables -----*/
let win = false
let wallet = 100
let wager = 10
let winCount = 0


	/*----- cached elements  -----*/
const slot1Image = document.getElementById('slot1Image')
const slot2Image = document.getElementById('slot2Image')
const slot3Image = document.getElementById('slot3Image')
const slot4Image = document.getElementById('slot4Image')
const slot5Image = document.getElementById('slot5Image')
const slot6Image = document.getElementById('slot6Image')
const slot7Image = document.getElementById('slot7Image')
const slot8Image = document.getElementById('slot8Image')
const slot9Image = document.getElementById('slot9Image')
const spinButton = document.getElementById('spinButton')
const alertMessage = document.getElementById('alertMessage')
const minusOneButton = document.getElementById('minusOneButton')
const minusFiveButton = document.getElementById('minusFiveButton')
const plusOneButton = document.getElementById('plusOneButton')
const plusFiveButton = document.getElementById('plusFiveButton')
const wagerAmount = document.getElementById('wagerAmount')
const walletAmount = document.getElementById('walletAmount')
const modal = document.getElementById('modal')
const modalCloseButton = document.getElementById('closeModalButton')


	/*----- event listeners -----*/
spinButton.addEventListener('click', spin)
minusOneButton.addEventListener('click', function(){changeWager(-1)})
minusFiveButton.addEventListener('click', function(){changeWager(-5)})
plusOneButton.addEventListener('click', function(){changeWager(1)})
plusFiveButton.addEventListener('click', function() {changeWager(5)})
window.addEventListener('load', init)
window.addEventListener('load', openModal)
modalCloseButton.addEventListener('click', closeModal)



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
        slot4Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot5Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot6Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot7Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot8Image.src = slotItemSources[Math.floor(Math.random() * 3)]
        slot9Image.src = slotItemSources[Math.floor(Math.random() * 3)]

    } else {
        alert("Not enough money!")
    }
    checkForWin()
}


function checkForWin(){

    if(slot1Image.src === slot2Image.src && slot2Image.src === slot3Image.src){
        win = true
        payoutWinnings()
    }

    if(slot4Image.src === slot5Image.src && slot5Image.src === slot6Image.src){
        win = true
        payoutWinnings()
    }

    if(slot7Image.src === slot8Image.src && slot8Image.src === slot9Image.src){
        win = true
        payoutWinnings()
    }
   
   
   
   
    else {
        win = false
        alertMessage.innerHTML = `<h2>YOU LOST $${wager}!</h2>`
    }

}


function payoutWinnings(){

    if(slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/ketchup.jpeg"){
        wallet = wallet + (wager * 2)
        alertMessage.innerText += `YOU WIN $${wager * 2} from line #1`
    } else if (slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/fries.jpeg"){
        wallet = wallet + (wager * 5)
        alertMessage.innerText += `YOU WIN $${wager * 5} from line #1`

    } else if (slot1Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/burger.jpeg"){
        wallet = wallet + (wager * 10)
        alertMessage.innerText += `YOU WIN $${wager * 10} from line #1`
    }

    if(slot4Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/ketchup.jpeg"){
        wallet = wallet + (wager * 2)
        alertMessage.innerText += `YOU WIN $${wager * 2} from line #2`
    } else if (slot4Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/fries.jpeg"){
        wallet = wallet + (wager * 5)
        alertMessage.innerText += `YOU WIN $${wager * 5} from line #2`

    } else if (slot4Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/burger.jpeg"){
        wallet = wallet + (wager * 10)
        alertMessage.innerText += `YOU WIN $${wager * 10} from line #2`
    }

    if(slot7Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/ketchup.jpeg"){
        wallet = wallet + (wager * 2)
        alertMessage.innerText += `YOU WIN $${wager * 2} from line #3`
    } else if (slot7Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/fries.jpeg"){
        wallet = wallet + (wager * 5)
        alertMessage.innerText += `YOU WIN $${wager * 5} from line #3`
    } else if (slot7Image.src === "https://petejacobs99.github.io/Unit-1-Project/assets/burger.jpeg"){
        wallet = wallet + (wager * 10)
        alertMessage.innerText += `YOU WIN $${wager * 10} from line #3`
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

function openModal(){
    modal.style.display = "flex"
}

function closeModal(){
    modal.style.display = "none"
}