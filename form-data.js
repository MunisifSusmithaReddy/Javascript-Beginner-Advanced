

let personObject = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
}
function getFirstName(event) {
  personObject.firstName = event.target.value;
  console.log(personObject)
}

function getLastName(event) {
    personObject.lastName = event.target.value;
    console.log(personObject)
}

function getMobileNumber(event) {
    personObject.mobileNumber = event.target.value;
    console.log(personObject)
}

function onButtonClick() {
    let output = `First Name is ${personObject.firstName} and Last Name is ${personObject.lastName} and Mobile number is ${personObject.mobileNumber}`;
    document.getElementById('person-output').innerHTML = output;
}

function onButtonOver() {
    // document.querySelector('#on-submit-button').style.background = "pink";
    let buttonList = document.querySelectorAll('.submit-button');
    for(let i = 0; i < buttonList.length; i++) {
        buttonList[i].style.background = "pink";
    }
}

function onButtonOverOut() {
    // document.querySelector('#on-submit-button').style.background = "black";

    let buttonList = document.getElementsByClassName('submit-button');
    for(let i = 0; i < buttonList.length; i++) {
        buttonList[i].style.background = "black";
    }
}

// onchange="getFirstName(event)" -- Event handler in HTML

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('first-name').addEventListener('change', getFirstName);
    document.getElementById('on-submit-button').addEventListener('click', onButtonClick);

    document.getElementById('first-name').removeEventListener('change', getFirstName);
})
// document.getElementById('first-name').addEventListener('change', getFirstName) // Event Listeners in Javascript File

// document.getElementById('on-submit-button').addEventListener('click', onButtonClick);