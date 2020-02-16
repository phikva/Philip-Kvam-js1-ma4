const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;


    if(valueLength > 1) {
        console.log("The input has a value");
    }
    else {
        console.log("too short");
    }
}

const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
} else {
    firstNameError.style.display = "block";
}
    event.preventDefault();
    
}

function checkInputLength(value) {
    
    const trimmedValue = value.trim();

   
    if(trimmedValue.length >= 2) {
        return true;
    }
    else {
        return false;
    }
}