var nextCarrossel = document.querySelector("#next-carrossel")
var backCarrossel = document.querySelector("#back-carrossel")
var header = document.querySelector("header")
var buttonCarrosselSellerGame = document.querySelector("#button-carrossel-seller-game")

var bestCardSeller01 = document.querySelector("#best-card-01")
var bestCardSeller02 = document.querySelector("#best-card-02")
var bestCardSeller05 = document.querySelector("#best-card-05")
var bestCardSeller06 = document.querySelector("#best-card-06")
var buttonCarrosselSellerGameLeft = document.querySelector("#button-carrossel-seller-game-left")

var indicator = document.querySelector("#indicator-carrossel")

var i = 1
function carrossel(){
    i++
    if(i > 3){
        i = 1
    }
    if(i == 2){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-02.png)'
        indicator.setAttribute('src', './assets/indicator-01.svg')
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
        indicator.setAttribute('src', './assets/indicator-02.svg')
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
        indicator.setAttribute('src', './assets/indicator-03.svg')
    }
}

nextCarrossel.addEventListener("click", ()=>{
    carrossel()
})

function carrosselBack(){
    i--
    if(i < 1){
        i = 3
    }
    if(i == 2){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-02.png)'
        indicator.setAttribute('src', './assets/indicator-01.svg')
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
        indicator.setAttribute('src', './assets/indicator-02.svg')
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
        indicator.setAttribute('src', './assets/indicator-03.svg')
    }
}

backCarrossel.addEventListener("click", ()=>{
    carrosselBack()
})

setInterval(function increment(){
    i++
    if(i > 3){
        i = 1
    }
    if(i == 2){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-02.png)'
        indicator.setAttribute('src', './assets/indicator-01.svg')
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
        indicator.setAttribute('src', './assets/indicator-02.svg')
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
        indicator.setAttribute('src', './assets/indicator-03.svg')
    }
}, 6000)


var carrosselGame = 0
function carrosselSellerGame(){
    carrosselGame++
    if(carrosselGame == 1){
        bestCardSeller01.classList.add('card-none')
        bestCardSeller05.classList.remove('card-none')
        buttonCarrosselSellerGameLeft.classList.remove('card-none')
    }else if(carrosselGame == 2){
        bestCardSeller02.classList.add('card-none')
        bestCardSeller06.classList.remove('card-none')
        buttonCarrosselSellerGame.classList.add('card-none')
    }
}

function buttonCarrosselLeft(){
    carrosselGame--
    if(carrosselGame == 0){
        bestCardSeller01.classList.remove('card-none')
        bestCardSeller05.classList.add('card-none')
        buttonCarrosselSellerGameLeft.classList.add('card-none')
    }else if(carrosselGame == 1){
        bestCardSeller02.classList.remove('card-none')
        bestCardSeller06.classList.add('card-none')
        buttonCarrosselSellerGame.classList.remove('card-none')
    }
}

buttonCarrosselSellerGameLeft.addEventListener("click", ()=>{
    buttonCarrosselLeft()
})

buttonCarrosselSellerGame.addEventListener("click", ()=>{
    carrosselSellerGame()
})


