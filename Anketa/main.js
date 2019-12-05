// подключить джейквери
$(document).ready(function () {
  $(".certificate__link-1").click(function () {
    $("#certificate-hidden__item-1").slideToggle(
      // "slow"
     {
        duration: 1000, // продолжительность анимации
        easing: "linear", // скорость анимации
     }
      );
    return false;
  });
  $(".certificate__link-2").click(function () {
    $("#certificate-hidden__item-2").slideToggle(
      // "slow"
      {
        duration: 1000, // продолжительность анимации
        easing: "linear", // скорость анимации
      }
    );
    return false;
  });

  $(".certificate__link-3").click(function () {
    $("#certificate-hidden__item-3").slideToggle(
      // "slow"
      {
        duration: 1000, // продолжительность анимации
        easing: "linear", // скорость анимации
      }
    );
    return false;
  });
  $(".certificate__link-4").click(function () {
    $("#certificate-hidden__item-4").slideToggle(
      // "slow"
      {
        duration: 1000, // продолжительность анимации
        easing: "linear", // скорость анимации
      }
    );
    return false;
  });
  $(".certificate__link-5").click(function () {
    $("#certificate-hidden__item-5").slideToggle(
      // "slow"
      {
        duration: 1000, // продолжительность анимации
        easing: "linear", // скорость анимации
      }
    );
    return false;
  });
  
});



// Для увилечения картином, в данный момент отключено см приложение в txt формате
// var image = document.querySelector('.certificate__image');
// var bigsize = "400"; //Размер большой картинки
// var smallsize = "120"; //Размер маленькой картинки

// image.onclick = function ({ target }) {
//   if (target.height == bigsize) {
//     target.height = smallsize;
//     image.classList.add('p');
//   }
//   else target.height = bigsize;
// };

