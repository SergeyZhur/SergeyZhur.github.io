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
});

/* <a class="hider">Ссылка</a>


  <div id="hidden" style="display: none;">
    <img src="https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/11/legkie-risunki-po-kletochkam-3.jpg" alt="">
</div>
    <div> gogogogogo</div> */