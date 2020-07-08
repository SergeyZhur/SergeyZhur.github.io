window.onload = loadStr;
let input = document.querySelector('.inp')
let valueCase = '';

input.addEventListener('keydown', function (event) {

  if (event.keyCode === 13) {

    valueCase = input.value;
    // console.log(valueCase)
    input.value = '';
    // localStorage.setItem(obj.key, valueCase);
    let obj = {
      name: `${valueCase}`
    }
    input.insertAdjacentHTML('afterend', `<div>${valueCase}</div>`);

    let json = JSON.stringify(obj);
    // console.log(json)
    //Запишем в localStorage с ключом obj:
    localStorage.setItem('obj', json);



    // if(obj.name === )
    // console.log(obj.name)
    // localStorage.setItem(obj.name);


  }

})

function loadStr() {

  // return localStorage.getItem(obj.name)

  let jsonOfLocalStorage = localStorage.getItem('obj');

  //Преобразуем их обратно в объект JavaScript:
  let obj = JSON.parse(jsonOfLocalStorage);

  if (!obj) {
    // console.log(1)
    obj = {}
  }
  // console.log(obj)
  // if(obj === null) {
  //   return 
  // }

  return obj.name

  // console.log(obj);
  // alert( localStorage.getItem('test') )
  // console.log(1)
}
// console.log(loadStr())

// function goga(b) {

// }
// console.log(goga(loadStr()))
let data = loadStr()
if (data) {
  input.insertAdjacentHTML('afterend', `<div>${loadStr()}</div>`)
}


// console.log(loadStr())
