const valueButton = document.querySelector('#wrapper-btn');
let arr = [];
const getValueAtr = (event) => {
  


arr.push(event.target.dataset.id);
  console.log(arr)
//     let sum = 0;
//   for(let i = 0; i<arr.length; i++) {
    
//      sum = sum + arr[i];
//     if(arr[i] === '+') {
//       arr[i] = '+'
//     }
//   }
//    let a = sum.substr(1);
//   console.log(a);
}

valueButton.addEventListener('click', getValueAtr);


  // при клике на нужный блок с цифрой, получаю его data атрибут, а именно значение

// ['331+1111+0-5']
// if(event === '+') {

// }

// function w( one, two) {
// return one + two
// }
// let res = w(3,3)
// console.log(res)



// есть главный массив результатов


// массив сложения
// массив вычитания
// массив умножения 

let as = ['3','2','-','5'];
let r = [];
for(let i = 0; i < as.length; i++) {

  if(typeof string) {
    r.push(Number(as[i]))
    console.log(r)
  }
}
