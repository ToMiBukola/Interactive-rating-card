let num = document.querySelector(".num")
let cardnumber = document.getElementById("cardnum")

let name = document.querySelector(".name")
let cardname = document.getElementById("cardname")

let cardmonth = document.querySelector(".mm")
let month = document.getElementById("month")

let cardyear = document.querySelector (".yy")
let year = document.getElementById("year")

let cardcvc = document.querySelector(".ccvnum")
let cvc = document.getElementById("cvc")

let confirmb = document.querySelector(".confirm")

confirmb.addEventListener("click", function(e){
    if (cardname.value!=="" || cardnumber.value!=="" || month.value!=="" || year.value!=="" || cvc.value!=="") {
        window.localStorage.setItem("cardDetails", JSON.stringify({
            cardname: cardname.value,
            cardnumber: cardnumber.value,
            month: month.value,
            year: year.value,
            cvc: cvc.value,
        }))
        window.location.replace("thank you.html")
    } else{
        alert("Input empty!")
    }
})


cardnumber.addEventListener("keyup", function(e){
    if (e.target.value.length === 16) {
        cardnumber.disabled= true
    }

    if (e.target.value==="") {
        num.textContent="0000 0000 0000 0000"
    } else {

        num.textContent=e.target.value;
    }
    console.log(num);
})

cardname.addEventListener("keyup", function(e){

    if (e.target.value==="") {
        name.textContent="YOUR NAME"
    } else {
        name.textContent=e.target.value
    }
    console.log(name);
})

month.addEventListener("keyup", function(e){
    if (e.target.value.length === 2) {
        month.disabled= true
    }

    if (e.target.value==="") {
        cardmonth.textContent="00"
    } else {
        cardmonth.textContent=e.target.value
    }
})

year.addEventListener("keyup", function(e){
    if (e.target.value.length ===2 ) {
        year.disabled= true
    }

    if(e.target.value==="") {
        cardyear.textContent="00"
    } else {
        cardyear.textContent=e.target.value
    }
})

cvc.addEventListener("keyup", function(e){

    if (e.target.value.length === 3) {
        cvc.disabled= true;
    }
    if (e.target.value==="") {
        cardcvc.textContent="000"
    } else {
        cardcvc.textContent=e.target.value
    }
})