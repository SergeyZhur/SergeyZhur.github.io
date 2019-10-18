var firstItem = document.getElementById('one__item');
var secondItem = document.getElementById('two__item');
var scrollBarRight = document.getElementById('scrollBar-right');
var nextImage = document.getElementById('nextImage');

var oneText = document.getElementById('OneText');
var oneHead = document.getElementById('oneHead');

firstItem.addEventListener('click', clickItemOne);
function clickItemOne(evt) {
  evt.preventDefault();
  secondItem.classList.remove("OneBlue");
  firstItem.classList.add("TwoPink");
 nextImage.style.display = 'block';
 scrollBarRight.classList.remove("ForYellow");
 scrollBarRight.classList.add("ThreeGreen");
 oneText.style.display = 'none';
 oneHead.style.display = 'none';

}

secondItem.addEventListener('click', clickItemTwo);
function clickItemTwo(evt) {
  // Отмена действия браузера
  // Есть два способа отменить действие браузера:

  // Основной способ – это воспользоваться объектом event.Для отмены действия браузера существует стандартный метод event.preventDefault().
  // Если же обработчик назначен через on<событие>(не через addEventListener), то также можно вернуть false из обработчика.
evt.preventDefault();
firstItem.classList.remove("TwoPink");
secondItem.classList.add("OneBlue");
nextImage.style.display = 'none';
scrollBarRight.classList.remove('ThreeGreen');
scrollBarRight.classList.add('ForYellow');
}



// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {

  showSlides(slideIndex += 1);
}
function minusSlide() {

  showSlides(slideIndex -=1);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");

  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex -1].className += " active";
}