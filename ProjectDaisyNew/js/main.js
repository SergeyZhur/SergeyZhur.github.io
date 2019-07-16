var mixer = mixitup ('.container-filter');

$(document).ready(function(){
  $('a[href^="#"]').click(function (){
    // сохраняем значнние атрибута хреф в переменной
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top

    }, 500);
    return false;
  });
});