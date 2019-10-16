var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');


btn1.addEventListener('click',one);
function one() {
  btn1.style.background ="#4a0594";
  btn1.style.color = "white";
  btn1.classList.add('btn1');
  btn2.classList.remove('btn1');
  btn3.classList.remove('btn1');
  btn4.classList.remove('btn1');
  btn5.classList.remove('btn1');
}

btn2.addEventListener('click',two);
function two() {
  btn1.style.background = 'none';
  btn1.style.color = "black";
  btn1.classList.remove('btn1');
  btn2.classList.add('btn1');
  btn3.classList.remove('btn1');
  btn4.classList.remove('btn1');
  btn5.classList.remove('btn1');
}

btn3.addEventListener('click', three);
function three() {
  btn1.style.background = 'none';
  btn1.style.color = "black";
  btn2.classList.remove('btn1');
  btn1.classList.remove('btn1');
  btn3.classList.add('btn1');
  btn4.classList.remove('btn1');
  btn5.classList.remove('btn1');
}

btn4.addEventListener('click', For);
function For() {
  btn1.style.background = 'none';
  btn1.style.color = "black";
  btn1.classList.remove('btn1');
  btn4.classList.add('btn1');
  btn3.classList.remove('btn1');
  btn2.classList.remove('btn1');
  btn5.classList.remove('btn1');
}

btn5.addEventListener('click', five);
function five() {
  btn1.style.background = 'none';
  btn1.style.color = "black";
  btn5.classList.add('btn1');
  btn2.classList.remove('btn1');
  btn3.classList.remove('btn1');
  btn4.classList.remove('btn1');
}


// POPAP
function buttonClick() {
  var popap = document.getElementById('popap');
  popap.classList.toggle('section-google__button--popapVisible');
}

var Ready = document.querySelector(".section-google__button--popapHidden")
Ready.addEventListener('click', ReadyBTN);

function ReadyBTN() {
  Ready.style.background = "red";
 
}