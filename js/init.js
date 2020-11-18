let playerHand = []
let deck= [];
let DealerHand = []
function addCardToPlayerHand(card){
    playerHand.push(card)
    let img = document.createElement("img")
    let rutaImagen = "images/Cards/" + card + ".png"
    img.setAttribute("src", rutaImagen)
    let clase = "card" + playerHand.length
    console.log(clase)
    img.setAttribute("class", clase)
    let subcontainer= document.querySelector(".subcontainer-player")
    subcontainer.appendChild(img)
}


function addCardToDealerHand(card){
    DealerHand.push(card)
    console.log(playerHand)
    let img = document.createElement("img")
    let rutaImagen = "images/Cards/" + card + ".png"
    img.setAttribute("src", rutaImagen)
    let clase = "card" + DealerHand.length
    img.setAttribute("class", clase)
    let subcontainer= document.querySelector(".subcontainer-dealer")
    subcontainer.appendChild(img)
}

//addCardToDealerHand("5S")
//addCardToDealerHand("3D")
//addCardToDealerHand("KH")


//addCardToPlayerHand("7S")
//addCardToPlayerHand("3D")
//addCardToPlayerHand("JC")

function getCardValue(card) {
    let first = card[0]
    if(first==="Q" || first ==="J" || first==="K"){
        return 10
    }
    if(first==="A"){
        return 1
    }else{
        let num= parseInt(first)
        return num
    }
}

let result = getCardValue ("5D")
console.log(result)

function getHandValue(hand){
    let acumulador= 0
    for(let item of hand){
        let value= getCardValue(item)
        acumulador= acumulador + value
    }
    return acumulador
}
getHandValue(playerHand)
getHandValue(DealerHand)

function showMessage(text){
    let date = new Date ()
    let time=""
    time= time+date.getHours () + ":" + date.getMinutes () + ":" + date.getSeconds ()
    let p= document.createElement("p")
    p.innerHTML= time + "  *  " + text
    document.querySelector(".chat").appendChild(p)
}
showMessage("hola")
showMessage("ey")

function clearChat(){
    let mensajes = document.querySelectorAll("p")
    for(let p of mensajes){
        p.remove()
    }
}

let results = clearChat()

function getWinner(){
    let playerValue = getHandValue(playerHand)
    console.log("resultados:")
    console.log(playerValue)
    let DealerValue = getHandValue(DealerHand)
    console.log("resultados:")
    console.log(DealerValue)
    
    if(playerHand>dealerHand){
        return ("player")
    }
}


function hideOptions(){
   let options= document.querySelector(".options")
   options.classList.add("hidden")
}

function showOptions(){
    let options= document.querySelector(".options")
    options.classList.remove("hidden")
    let StandButton = document.querySelector('.stand')
    StandButton.onclick = StandCallback
    let HitButton = document.querySelector('.hit')
    HitButton.onclick = HitCallback
}
function StandCallback(event){
    console.log('has pulsado stand')
}
function HitCallback(event){
    let card4= DrawCard()
    addCardToPlayerHand(card4)
}

hideOptions()
showOptions()

function showModal(){
    let black= document.querySelector(".black")
    black.classList.remove("hidden")
}

function hideModal(){
    let black= document.querySelector(".black")
    black.classList.add("hidden")
}

hideModal()
//showModal()

function createDeck(){
    let families = ["H", "S", "D", "C"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
    for(let i= 0; i<families.length;i++){
        for(let J=0; J<values.length; J++){
            let concat= `${values[J]}${families[i]}`; deck.push(concat);
        }
    }
    return deck;
}


function DrawCard(){
    let position= Math.round(Math.random()*deck.length-1);
    let card= deck[position];
    deck.splice(position,1);
    return card;
};

function startRound(){
    deck= createDeck()
    let card= DrawCard()
    addCardToPlayerHand(card)
    let card2= DrawCard()
    addCardToPlayerHand(card2)
    let card3= DrawCard()
    addCardToDealerHand(card3)
    showOptions()
}
startRound()