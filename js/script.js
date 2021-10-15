let amountElement = document.querySelector(".js-amount");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyOnElement = document.querySelector(".js-currencyOn");
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

const pln = 1.00;
const eur = 4.61;
const usd = 3.97;
const gbp = 5.41;
let result;

buttonElement.addEventListener("click", (event) => {
    event.preventDefault();

    switch (currencyFromElement.value) {
        case "pln":
            result = amountElement.value * pln;
            break;
        case "eur":
            result = amountElement.value * eur;
            break;
        case "usd":
            result = amountElement.value * usd;
            break;
        case "gbp":
            result = amountElement.value * gbp;
            break;
    }

    switch (currencyOnElement.value) {
        case "pln":
            result /= pln;
            break;
        case "eur":
            result /= eur;
            break;
        case "usd":
            result /= usd;
            break;
        case "gbp":
            result /= gbp;
            break;
    }

    resultElement.innerHTML = result.toFixed(2);

});





