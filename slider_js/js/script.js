

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-item");
  var linkImg = document.getElementsByClassName("gallery-row__img");
  var a_linkImg = document.getElementsByClassName("gallery-row__linkImg");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < a_linkImg.length; i++) {
    a_linkImg[i].className = a_linkImg[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  a_linkImg[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

// var galleryRow = document.getElementsByClassName('gallery-row')[0];
// galleryRow.