var pupap = document.getElementById('pupap-information');
var button = document.getElementById('burger-button');
function clickOnButton() {

pupap.classList.toggle('pupap-hidden');
}


button.addEventListener('click', clickOnButton)


// function as() {
//   pupap.classList.remove('pupap');
//   pupap.classList.add('pupap2');
// }

// button.addEventListener('click', as)