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

var btn = document.getElementById('btn-header-one');
var btn2 = document.getElementById('btn-header-two');
var header = document.getElementById('header');

btn.onclick = function() {
  header.classList.add('header-background-girl');
  pupap.classList.add('pupap-information-girl');
  
}
btn2.onclick = function() {
  header.classList.remove('header-background-girl');
  pupap.classList.remove('pupap-information-girl');
}


// document.onclick = function() {
//   // if(event.target == header) {
//   // pupap.style.background='red';
//   // }
//   pupap.style.background = "red";
// }