// button - Genera --> ticket calculation
const generate = document.getElementById("generate");
generate.addEventListener("click", function() {

// get values from inputs
const name = document.getElementById("name").value;
const distance = document.getElementById("distance").value;
const age = document.getElementById("age").value;

// calculate ticket price

let price;
let offer;
if (age == "minorenne") {
    price = ((distance * 0.21) * 0.8).toFixed(2);  
    offer = `biglietto young`;
} else if (age == "over_65") {
    price = ((distance * 0.21) * 0.6).toFixed(2);  
    offer = `biglietto senior`;
}else{
price = (distance * 0.21).toFixed(2);
offer = `biglietto standard`;
}
console.log(price)

// random 
document.getElementById("show-carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
document.getElementById("show-codice-CP").innerHTML = Math.floor(Math.random() * 10000) + 90001;


// values
document.getElementById("show-name").innerHTML = name;
document.getElementById("show-offer").innerHTML = offer;
document.getElementById("price").innerHTML = price + " €";


// display ticket
const ticket = document.querySelector(".back-ticket");
ticket.classList.add("ticket-on");
});

//reset
const reset = document.getElementById("reset");
reset.addEventListener("click", function() {


// hide ticket
const ticket = document.querySelector(".back-ticket");
ticket.style.visibility = "hidden";
}); 