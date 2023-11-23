//Const
const rosto = document.querySelector("#rostinho")
const clicks = document.querySelector("#clicker-cont")
const upclick = document.querySelector("#item-1")
const slavesup = document.querySelector("#item-2")

//Click
let click = 1
let boost = 0

rosto.addEventListener('click', clickss)

function clickss() {
    clicks.value = parseInt(clicks.value) + click + boost
}

//Boosts
let item1price = 100

upclick.addEventListener('click', clikado)
 function clikado() {
    if (clicks.value >= item1price) {
        clicks.value = clicks.value - item1price
        boost = boost + 1
    }
 }


 let item2price = 1000
 let slavescont = 0
 let slaveok = false


 slavesup.addEventListener('click', boll)

 function boll() {
     if (clicks.value >= item2price) {
         slaveok = true;
         slavescont = slavescont + 1
         clicks.value = clicks.value - item2price
     }
 }



setInterval(slaver, 1000)
function slaver() {

    if (slaveok == true) {
        clicks.value = parseInt(clicks.value) + slavescont
    }
}
