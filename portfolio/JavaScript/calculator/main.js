const wrapperForEvents = document.querySelector('#wrapper-btn');
const firstTextArea = document.querySelector('.text-result');
let cleanTextArea = document.querySelector('.clean-input');
let secondTextArea = document.querySelector('.text');

let EmptyStr = '';

let onTargetButton = (event) => {

  let resultEval = '';
  let target = event.target.textContent;



  // }
  //   if(target === EmptyStr[0] && EmptyStr[0] === '-') {
  //   return EmptyStr = ''
  // } else {
  //   console.log(2)
  // }

  if (target === '=') {

    resultEval = eval(EmptyStr);
    firstTextArea.textContent = '';

    firstTextArea.textContent = resultEval;
    secondTextArea.textContent = resultEval;
    EmptyStr = resultEval;

    return
  }

  //   if(resultEval[resultEval.length - 1] === '-' && resultEval[resultEval.length - 2] === '-'){ 
  //   console.log(1)
  // }

  EmptyStr += event.target.textContent
  firstTextArea.textContent = EmptyStr;
}


wrapperForEvents.addEventListener('click', onTargetButton)
cleanTextArea.addEventListener('click', function () {

  firstTextArea.textContent = '';
  EmptyStr = '';
  secondTextArea.textContent = '';

})

// let go = '12-----'
// for(let i = 0; i < go.length; i++) {
//   console.log(go[i])

//   // if(go[i])
// }



// if(str[0]==='-') {
//   str = ''
// }