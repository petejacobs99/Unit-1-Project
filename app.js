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
const walletText = document.getElementById('wallet')



	/*----- event listeners -----*/
spinButton.addEventListener('click', spin)

	/*----- functions -----*/

function spin(){
    slot1Image.src = slotItemSources[Math.floor(Math.random() * 3)]
    slot2Image.src = slotItemSources[Math.floor(Math.random() * 3)]
    slot3Image.src = slotItemSources[Math.floor(Math.random() * 3)]
    checkForWin()
}

function init(){
 wallet = 100

 wager = 10
}

function checkForWin(){

    if(slot1Image.src === slot2Image.src && slot2Image.src === slot3Image.src){
        win = true
    } else {
        win = false
    }  
    checkWager()
}

function checkWager(){
    if(win === true){

    } else if (win === false){

    } else {
        alert('error')
    }
}

document.addEventListener('DOMContentLoaded', init)