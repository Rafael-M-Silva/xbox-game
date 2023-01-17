var nextCarrossel = document.querySelector("#next-carrossel")
var backCarrossel = document.querySelector("#back-carrossel")
var header = document.querySelector("header")


var i = 1
function carrossel(){
    i++
    if(i > 3){
        i = 1
    }
    if(i == 2){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-02.png)'
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
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
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
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
    }else if(i == 3){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-03.png)'
    }else if(i == 1){
        header.style.backgroundImage = 'linear-gradient(to top, transparent 0%, #0E0123 100%), url(../img/banner-header-01.png)'
    }
}, 6000)



