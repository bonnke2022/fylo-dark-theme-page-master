const form = document.querySelector("#form");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const confirmBtn = document.querySelector('.confirmBtn');
const continueBtn = document.querySelector(".continueBtn");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmDisplay();    
    nextPage();
});

// continueBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     prevPage();
// });

function confirmDisplay() {
    const cardNameValue = cardName.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const cvcValue = cvc.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();

    if (!cardNameValue || !isNaN(cardNameValue)) {
        setError(cardName, "");
    } else {
        setSuccess(cardName);
    }
    if (!cardNumberValue || isNaN(cardNumberValue) || cardNumber > 9999999999999999) {
        setError(cardNumber, "Wrong format, numbers only!");
    } else {
        setSuccess(cardNumber);
    }
    if (!monthValue) {
        setError(month, "Can't be blank");
    }
    else if (isNaN(monthValue)) {
        setError(month, "Wrong format, numbers only!");
    }
    else if (month > 12) {
        setError(month, "Only 12 months in a year");
    }
    else {
        setSuccess(month);
    }
    if (!yearValue) {
        setError(year, "Can't be blank");
    }
    else if (isNaN(yearValue)) {
        setError(year, "Wrong format, numbers only!");
    }
    else if (year > 9999) {
        setError(year, "Wrong format");
    }
    else {
        setSuccess(year);
    }
    if (!cvcValue || isNaN(cvcValue) || cvcValue > 999) {
        setError(cvc, "Can't be blank");
    }
    else {
        setSuccess(cvc);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");

    span.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function nextPage(){
    wrapper.classList.remove("hidden");
    container.classList.add("hidden");    
}
function prevPage(){
    container.classList.remove("hidden");
    wrapper.classList.add("hidden");
}