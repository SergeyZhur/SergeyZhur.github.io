const valueButton = document.querySelector('#wrapper-btn');
let result = document.querySelector('.text-result');
let s = document.querySelector('#s');
let arr = [];
const actions = ['+', '-', '/', '*'];

let strNumbers = '';
const getValueAtr = (event) => {
  strNumbers = ''
  const lastElement = arr[arr.length - 1];
  const {
    textContent
  } = event.target;

  if (actions.includes(textContent)) {
    if (actions.includes(lastElement)) {
      arr[arr.length - 1] = textContent;
    } else {
      if (arr.length || textContent === '-') {
        arr.push(event.target.textContent);
      }
    }
  } else {
    arr.push(event.target.textContent);
  }



  for (let i = 0; i < arr.length; i++) {

    strNumbers = strNumbers + arr[i];
    // if (arr[i] === '=') {
    //   arr[i] = '';
    //   let v = eval(strNumbers)
    //   console.log(v);
    // }
  }




  // console.log(strNumbers)


  result.textContent = strNumbers;


  s.addEventListener('click', function () {
    let p = eval(strNumbers);
    console.log(p)
  })
}









valueButton.addEventListener('click', getValueAtr);

// s.addEventListener('click', function() {
//   
//   return r
// })

const arr1 = ['1', '-', '2', '*', '5', '+', '4', '5'];
let result = 0;

export const actions = {
  ymnojenie: '*',
  delenie: '/',
  plus: '+',
  minus: '-'
}

export const actionsFunctions = {
  [actions.ymnojenie]: ymnojenie,
  [actions.delenie]: delenie,
  [actions.plus]: plus,
  [actions.minus]: minus
}

actionsFunctions[actions.minus]

arr1.forEach((n, i) => {
  if (i === 0) {
    const callback = actions[arr1[i + 1]];
    result = callback(+n, arr1[i + 2]);
    return;
  }
  if (isFinite(+n) && i > 2) {
    const callback = actions[arr1[i - 1]] ? ? plus;
    result = callback(result, +n);
  }
});

function plus(num, num2) {
  return num + num2
}

function minus(num, num2) {
  return num - num2
}

function delenie(num, num2) {
  return num / num2
}

function ymnojenie(num, num2) {
  return num * num2
}
