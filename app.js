	/*----- constants -----*/
const slotItemSources = ['assets/burger.jpeg', 'assets/fries.jpeg', 'assets/ketchup.jpeg', "assets/pizza.jpeg"]

	/*----- state variables -----*/
let wallet = 100
let wager = 10


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
        alertMessage.innerText = ""
        slot1Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot2Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot3Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot4Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot5Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot6Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot7Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot8Image.src = slotItemSources[Math.floor(Math.random() * 4)]
        slot9Image.src = slotItemSources[Math.floor(Math.random() * 4)]

    } else {
        alert("Not enough money!")
    }
    checkForWin()
}


function checkForWin(){
if((slot1Image.src === slot2Image.src && slot2Image.src === slot3Image.src)
 || (slot4Image.src === slot5Image.src && slot5Image.src === slot6Image.src)
  || (slot7Image.src === slot8Image.src && slot8Image.src === slot9Image.src)
   || (slot1Image.src === slot5Image.src && slot5Image.src === slot9Image.src)
    || (slot7Image.src === slot5Image.src && slot5Image.src === slot3Image.src)){
    if(slot1Image.src === slot2Image.src && slot2Image.src === slot3Image.src){
        if(getFileNameFromPath(slot1Image.src) === "ketchup.jpeg"){
            wallet = wallet + (wager * 2)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 2} from line #1 <br>`

        } else if (getFileNameFromPath(slot1Image.src) === "fries.jpeg"){
            wallet = wallet + (wager * 5)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 5} from line #1 <br>`
    
        } else if (getFileNameFromPath(slot1Image.src) === "burger.jpeg"){
            wallet = wallet + (wager * 10)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 10} from line #1 <br>`

        } else if (getFileNameFromPath(slot1Image.src) === "pizza.jpeg"){
            wallet = wallet + (wager * 15)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 15} from line #1 <br>`
        }
    }

    

    if(slot4Image.src === slot5Image.src && slot5Image.src === slot6Image.src){

        if(getFileNameFromPath(slot4Image.src) === "ketchup.jpeg"){
            wallet = wallet + (wager * 2)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 2} from line #2 <br>`

        } else if (getFileNameFromPath(slot4Image.src) === "fries.jpeg"){
            wallet = wallet + (wager * 5)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 5} from line #2 <br>`
    
        } else if (getFileNameFromPath(slot4Image.src) === "burger.jpeg"){
            wallet = wallet + (wager * 10)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 10} from line #2 <br>`

        } else if (getFileNameFromPath(slot4Image.src) === "pizza.jpeg"){
            wallet = wallet + (wager * 15)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 15} from line #2 <br>`
        }
    }

    if(slot7Image.src === slot8Image.src && slot8Image.src === slot9Image.src){

        if(getFileNameFromPath(slot7Image.src) === "ketchup.jpeg"){
            wallet = wallet + (wager * 2)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 2} from line #3 <br>`

        } else if (getFileNameFromPath(slot7Image.src) === "fries.jpeg"){
            wallet = wallet + (wager * 5)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 5} from line #3 <br>`

        } else if (getFileNameFromPath(slot7Image.src) === "burger.jpeg"){
            wallet = wallet + (wager * 10)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 10} from line #3 <br>`

        } else if (getFileNameFromPath(slot7Image.src) === "pizza.jpeg"){
            wallet = wallet + (wager * 15)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 15} from line #4 <br>`
        }
    }

    if(slot1Image.src === slot5Image.src && slot5Image.src === slot9Image.src){
        if(getFileNameFromPath(slot1Image.src) === "ketchup.jpeg"){
            wallet = wallet + (wager * 2)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 2} from diagonal <br>`

        } else if (getFileNameFromPath(slot1Image.src) === "fries.jpeg"){
            wallet = wallet + (wager * 5)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 5} from diagonal <br>`

        } else if (getFileNameFromPath(slot1Image.src) === "burger.jpeg"){
            wallet = wallet + (wager * 10)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 10} from diagonal <br>`

        } else if (getFileNameFromPath(slot1Image.src) === "pizza.jpeg"){
            wallet = wallet + (wager * 15)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 15} from diagonal <br>`
        }
    }

    if(slot7Image.src === slot5Image.src && slot5Image.src === slot3Image.src){
        if(getFileNameFromPath(slot7Image.src) === "ketchup.jpeg"){
            wallet = wallet + (wager * 2)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 2} from diagonal <br>`

        } else if (getFileNameFromPath(slot7Image.src) === "fries.jpeg"){
            wallet = wallet + (wager * 5)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 5} from diagonal <br>`

        } else if (getFileNameFromPath(slot7Image.src) === "burger.jpeg"){
            wallet = wallet + (wager * 10)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 10} from diagonal <br>`

        }else if (getFileNameFromPath(slot7Image.src) === "pizza.jpeg"){
            wallet = wallet + (wager * 15)
            walletAmount.innerText = wallet
            alertMessage.innerHTML += `YOU WIN $${wager * 15} from diagonal <br>`
        }
    }
   
} else {
    alertMessage.innerText = `YOU LOSE $${wager}`
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

function getFileNameFromPath(path) {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName;
  }