// // подключить джейквери
// $(document).ready(function () {
//   $(".certificate__link-1").click(function () {
//     $("#certificate-hidden__item-1").slideToggle(
//       // "slow"
//      {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//      }
//       );
//     return false;
//   });
//   $(".certificate__link-2").click(function () {
//     $("#certificate-hidden__item-2").slideToggle(
//       // "slow"
//       {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//       }
//     );
//     return false;
//   });

//   $(".certificate__link-3").click(function () {
//     $("#certificate-hidden__item-3").slideToggle(
//       // "slow"
//       {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//       }
//     );
//     return false;
//   });
//   $(".certificate__link-4").click(function () {
//     $("#certificate-hidden__item-4").slideToggle(
//       // "slow"
//       {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//       }
//     );
//     return false;
//   });
//   $(".certificate__link-5").click(function () {
//     $("#certificate-hidden__item-5").slideToggle(
//       // "slow"
//       {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//       }
//     );
//     return false;
//   });
//   $(".certificate__link-6").click(function () {
//     $("#certificate-hidden__item-6").slideToggle(
//       // "slow"
//       {
//         duration: 1000, // продолжительность анимации
//         easing: "linear", // скорость анимации
//       }
//     );
//     return false;
//   });
// });



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

function Calendar2(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = '<tr>',
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
    for (var i = 0; i < 6; i++) calendar += '<td>';
  }
  for (var i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    } else {
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
}