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







/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("we-thought");
  var dots = document.getElementsByClassName("we-thought-wrapper__dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
    
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
    
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    
  }
  slides[slideIndex - 1].style.display = "block";
  
}