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
