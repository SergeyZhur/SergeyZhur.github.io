const input = document.querySelector('input');
const button = document.querySelector('button');
const wrapperForDiv = document.querySelector('.wrapper');

let stringTransformationInArray = [];


const l = (element) => {
  console.log(element)
};
// функция вместо console.log() сделал короткую


const fetchToLocalStorage = (arr) => {
  let json = JSON.stringify(arr);

  localStorage.setItem('arrayValue', json);
}
// превращение массива в строку и запись в локал сторедж


const onButtonEnter = (event) => {
  // при нажатие enter(13 номер кнопки) получаю значение инпута и чищу поле

  if (event.keyCode === 13) {

    const inputValueTrim = input.value.trim();

    if (inputValueTrim === '') {
      return
    }

    input.value = '';

    stringTransformationInArray = stringTransformationInArray.concat(inputValueTrim);

    wrapperForDiv.insertAdjacentHTML('afterBegin', `<div class="item">${inputValueTrim}</div>`);
    // создаю div и кладу в него последний элемент массива

    fetchToLocalStorage(stringTransformationInArray);
  }
};


input.addEventListener('keydown', onButtonEnter)


const getArrayValues = () => {

  let arrayOfLocalStorage = localStorage.getItem('arrayValue');
  stringTransformationInArray = JSON.parse(arrayOfLocalStorage) || [];

  if (arrayOfLocalStorage) {

    stringTransformationInArray.forEach(function (item) {
      wrapperForDiv.insertAdjacentHTML('afterBegin', `<div class="item">${item}</div>`);
    })
  }
}

getArrayValues()

button.addEventListener('click', function () {
  localStorage.clear()
  wrapperForDiv.remove()
})
// очистка локал стореджа и удаление обертки с div значениями